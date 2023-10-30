import { createElement, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import { getTimeFormat } from "../helper";

export default function AudioPlayer({ audio }) {
    const [thumbPosition, setThumbPosition] = useState(0);
    const [currentTime, audioCurrentTime] = useState("");
    const [audioStatus, setAudioStatus] = useState(false);
    const [audioDuration, setaAudioDuration] = useState(0);
    const [muted, setMuted] = useState(false);

    // Toggle audio (play/pause)
    function toggleAudio() {
        if (!audioStatus) audio.play();
        else audio.pause();
        setAudioStatus(!audioStatus);
    }

    // Toggle sound (muted/unmuted)
    function toggleSound() {
        if (muted) audio.muted = false;
        else audio.muted = true;
        setMuted(!muted);
    }

    // when the audio ends, reset the timeline thumb position and the audio current time and the displayed time
    function audioEnded() {
        setThumbPosition(0);
        audioCurrentTime("");
        setAudioStatus(false);
        audio.currentTime = 0;
    }

    // when changing the timeline position, update audio current time
    function changeSeek(e) {
        const time = (e.target.value / 100) * audioDuration;
        audio.currentTime = Math.floor(time);
    }

    // when update audio current time, recalculate the time line thumb position and update the displayed time
    function changeTimelinePosition() {
        audioCurrentTime(getTimeFormat(audio.currentTime));
        setThumbPosition((100 * audio.currentTime) / audio.duration);
    }

    useEffect(() => {
        // When the audio ends, call this method
        audio.onended = audioEnded;

        // In the audio duration first load it becomes "Infinity" and this cause a timeline bug
        audio.addEventListener("durationchange", function() {
            if (audio.duration === Infinity) {
                audio.currentTime = 10000000; //fake big time
            } else {
                audio.currentTime = 0; // to reset the time, so it starts at the beginning
                setaAudioDuration(audio.duration);

                // When update the audio current time call this method
                audio.ontimeupdate = changeTimelinePosition;
            }
        });

        return () => {
            audio.pause();
        };
    }, []);

    return (
        <div className="flex-containers center-content audio-player-container">
            <FontAwesomeIcon
                icon={muted ? faVolumeXmark : faVolumeHigh}
                onClick={toggleSound}
                className="process-icon sound-icon"
            />
            <div className="timeline-container">
                <input type="range" className="timeline-slider" max="100" value={thumbPosition} onChange={changeSeek} />
                <div className="flex-containers space-items timers-container">
                    <p className="sm-text">{currentTime}</p>
                    <p className="sm-text">{getTimeFormat(audioDuration)}</p>
                </div>
            </div>
            <FontAwesomeIcon
                icon={audioStatus ? faPause : faPlay}
                className="process-icon play-icon"
                onClick={toggleAudio}
            />
        </div>
    );
}
