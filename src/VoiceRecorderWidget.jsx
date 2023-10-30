import { createElement, useEffect, useState } from "react";

import "./ui/VoiceRecorderWidget.css";
import AudioViewer from "./components/AudioViewer";
import AudioRecorder from "./components/AudioRecorder";

export default function VoiceRecorderWidget(props) {
    const [id, setId] = useState(null);

    const getDuration = () =>
        props.durationType === "limited" && props.duration < 3600 && props.duration > 0 ? props.duration : 3599;

    useEffect(() => {
        if (props?.data?.status === "available") {
            setId(props?.data?.items[0].id);
        }
    }, [props?.data]);

    return id ? (
        (props.componentType === "viewer" && <AudioViewer id={id} />) ||
            (props.componentType === "recorder" && (
                <AudioRecorder
                    id={id}
                    duration={getDuration()}
                    showWarningMsg={props.showWarningMsg}
                    warningMsgContent={props.warningMsgContent}
                    warningMsgDuration={props.warningMsgDuration}
                    fileExtension={props.fileExtension}
                    onSave={props.onSave}
                    onPause={props.onPause}
                    onDiscard={props.onDiscard}
                />
            )) || <div>Empty</div>
    ) : (
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
