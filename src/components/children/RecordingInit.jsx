import { createElement } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

export default function RecordingInit({ minAction, recordingState, errorMsg }) {
    return (
        <div className="p-15">
            <div
                onClick={minAction}
                className={[
                    "cursor-pointer",
                    "flex-containers",
                    "center-content",
                    recordingState === "saved" || errorMsg ? "not-clickable" : ""
                ].join(" ")}
            >
                <FontAwesomeIcon className="process-icon mic-icon" icon={faMicrophone} />
                <p>Start recording</p>
            </div>
            {errorMsg && <span className="error-msg">{errorMsg}</span>}
        </div>
    );
}
