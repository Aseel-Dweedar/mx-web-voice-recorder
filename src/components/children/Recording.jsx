import { createElement } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop } from "@fortawesome/free-solid-svg-icons";

import { getTimeFormat } from "../helper";

export default function Recording({
    recordingTimer,
    duration,
    showWarningMsg,
    warningMsg,
    warningMsgContent,
    stopRecording
}) {
    return (
        <div className="items-container">
            <div className="flex-containers center-content">
                <div className="recording-lds-ripple">
                    <div></div>
                    <div></div>
                </div>
                <p className="recording">Recording</p>
            </div>

            <div className="flex-containers center-content max-width-100">
                <div className="duration-container">
                    <p>
                        {recordingTimer} / {getTimeFormat(duration)}
                    </p>
                    {showWarningMsg && warningMsg && (
                        <span className="warning">{warningMsgContent?.value || "Recording time is almost over!"}</span>
                    )}
                </div>
                <div className="record-process"></div>
                <FontAwesomeIcon className="process-icon stop-icon" icon={faStop} onClick={stopRecording} />
            </div>
        </div>
    );
}
