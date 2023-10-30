import { createElement, useEffect, useState } from "react";

import AudioPlayer from "./children/AudioPlayer";

export default function Viewer({ id }) {
    const [audio, setAudio] = useState(null);

    async function setupAudio() {
        // get audio file URL from Mendix
        const url = await mx.data.getDocumentUrl(id);

        /*
            Create a new request object using the URL
            and add the header ("Accept-Ranges": "bytes")
            this will enable setting the audio current time and seek the audio
            NOTE: if you put the URL directly into the javascript audio the seek will not work
        */
        const requestObj = new Request(url, {
            method: "GET",
            headers: {
                "Accept-encoding": "gzip",
                "Accept-Ranges": "bytes" // for enable audio seeking
            },
            referrerPolicy: "no-referrer"
        });

        // fetch the audio file and create the URL
        fetch(requestObj)
            .then(response => response.blob())
            .then(blob => {
                const newAudio = new Audio();
                newAudio.src = window.URL.createObjectURL(blob);
                setAudio(newAudio);
            });
    }

    useEffect(() => {
        setupAudio();
    }, [id]);

    return <div className="items-container voice-viewer-container">{audio && <AudioPlayer audio={audio} />}</div>;
}
