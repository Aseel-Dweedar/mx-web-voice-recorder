import React, { createElement } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import AudioPlayer from "./AudioPlayer";

export default function RecordingEnded({ audio, saveFile, discardFile }) {
    return (
        <div className="items-container">
            <p>Recording stopped</p>
            <React.Fragment>
                <AudioPlayer audio={audio} />
                <div className="flex-containers end-items">
                    <FontAwesomeIcon icon={faCheck} onClick={saveFile} className="process-icon save-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={discardFile} className="process-icon discard-icon" />
                </div>
            </React.Fragment>
        </div>
    );
}
