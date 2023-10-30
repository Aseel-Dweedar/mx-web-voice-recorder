import { createElement, useEffect, useState } from "react";

import { getTimeFormat } from "./helper";
import { RecordRTCPromisesHandler } from "recordrtc";
import Recording from "./children/Recording";
import RecordingInit from "./children/RecordingInit";
import RecordingEnded from "./children/RecordingEnded";

/*
    make the init timer 0 and a global variable
    NOTE: we didn't put it as a state because setInterval closure only accesses the time variable in the first render
    so if we keep it as a state the time always has the value of 0 within the setInterval callback.
*/
let globalInitTimerSec = 0;
// Make the interval timer as a global variable to clear it when the timer expires
let counterInterval;

export default function AudioRecorder({
    id,
    fileExtension,
    duration,
    showWarningMsg,
    warningMsgContent,
    warningMsgDuration,
    onPause,
    onSave,
    onDiscard
}) {
    const [recorder, setRecorder] = useState(null);

    // use this state to start recording after get the mic permission
    const [recorderInit, setRecorderInit] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [audio, setAudio] = useState(null);
    const [blob, setBlob] = useState("");

    const [recordingState, setRecordingState] = useState("initial");

    const [recordingTimer, setRecordingTimer] = useState("");
    const [warningMsg, setWarningMsg] = useState(false);

    /*
        When the recording is stopped, reset the states and get the recording blob to save it in the Mendix object
        and create the Audio object the responsible for lunching the recording before saving it
    */
    const stopRecording = async () => {
        onPause?.canExecute && onPause.execute();

        setRecordingState("stopped");

        clearInterval(counterInterval);
        setRecordingTimer("");
        globalInitTimerSec = 0;

        setWarningMsg(false);

        await recorder?.stopRecording();
        const recordBlob = await recorder?.getBlob();
        setBlob(recordBlob);

        const newAudio = new Audio();
        newAudio.src = URL.createObjectURL(recordBlob);

        setAudio(newAudio);
    };

    /*
        When the discarding the record file, reset the states to start the recording process from the beginning
    */
    const discardFile = () => {
        audio?.pause();
        setRecordingState("initial");
        setBlob("");
        setAudio(null);
        onDiscard?.canExecute && onDiscard.execute();
    };

    /*
        Render the timer when the recording is started
    */
    const timerStarts = () => {
        setRecordingTimer(getTimeFormat(globalInitTimerSec));

        counterInterval = setInterval(() => {
            globalInitTimerSec++;
            setRecordingTimer(getTimeFormat(globalInitTimerSec));

            // Show the warning message when the recording time is about to end.
            if (globalInitTimerSec < duration && globalInitTimerSec > duration - warningMsgDuration) {
                setWarningMsg(true);
            } else if (globalInitTimerSec === duration + 1) {
                stopRecording();
            }
        }, 1000);
    };

    /*
        prompt for user permissions, if generated set the recorder and start recording, if declined show the error message
    */
    const getUserPermission = () => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(stream => {
                // after get the permission, generate our recorder
                const newRecorder = new RecordRTCPromisesHandler(stream, {
                    type: "audio"
                });
                setErrorMsg("");
                setRecorder(newRecorder);
                setRecorderInit(true);
            })
            .catch(error => {
                // when Permission denied, show the error message
                const msg = `${error.message}${
                    error.message === "Permission denied" ? ", please enable microphone permissions" : ""
                }`;
                setErrorMsg(msg);
                console.error(`You got an error: ${error}`);
            });
    };

    /*
        When recording is started, render recording component and start recording timer
    */
    const startRecording = () => {
        // Before start recording, check if the user have the permissions, else reset the process
        navigator.permissions.query({ name: "microphone" }).then(permissionStatus => {
            if (permissionStatus.state === "granted") {
                recorder.startRecording();
                setRecordingState("recording");
                timerStarts();
            } else {
                setRecorderInit(false);
                getUserPermission();
            }
        });
    };

    /*
        Check for the current state and set the mic on click action,
        on initialize get the permission
        if the is an error or the record is saved already, no action needed
        else start recording directly
    */
    const getMicAction = () =>
        !recorder && !errorMsg
            ? getUserPermission
            : errorMsg || recordingState === "saved"
            ? undefined
            : startRecording;

    /*
        Save the record to the Mendix, for more information visit: https://apidocs.rnd.mendix.com/8/client/mx.data.html
    */
    const saveFile = async () => {
        setRecordingState("saved");
        audio?.pause();

        await mx.data.get({
            guid: id,
            callback: async function(obj) {
                if (obj) {
                    let name = obj?.get("Name");
                    if (!name?.endsWith(fileExtension)) {
                        name = `${name}.${fileExtension}`;
                    }
                    await mx.data.saveDocument(
                        id,
                        name,
                        {},
                        blob,
                        function(file) {
                            console.info({ file }, "FILE SAVED ");
                            onSave?.canExecute && onSave.execute();
                        },
                        function(e) {
                            console.error({ e }, "Error saving document");
                        }
                    );
                } else {
                    console.info("Cannot save twice on the same entity");
                }
            }
        });
    };

    /*
        to start recording directly after get the permission
    */
    useEffect(() => {
        if (recorderInit) startRecording();
    }, [recorderInit]);

    return (
        <div className="w-100 voice-recorder-container">
            {(recordingState === "initial" || recordingState === "saved") && (
                <RecordingInit minAction={getMicAction()} recordingState={recordingState} errorMsg={errorMsg} />
            )}
            {recordingState === "recording" && (
                <Recording
                    recordingTimer={recordingTimer}
                    showWarningMsg={showWarningMsg}
                    duration={duration}
                    warningMsg={warningMsg}
                    stopRecording={stopRecording}
                    warningMsgContent={warningMsgContent}
                />
            )}
            {recordingState === "stopped" &&
                (audio ? (
                    <RecordingEnded audio={audio} saveFile={saveFile} discardFile={discardFile} />
                ) : (
                    <div className="loading-lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ))}
        </div>
    );
}
