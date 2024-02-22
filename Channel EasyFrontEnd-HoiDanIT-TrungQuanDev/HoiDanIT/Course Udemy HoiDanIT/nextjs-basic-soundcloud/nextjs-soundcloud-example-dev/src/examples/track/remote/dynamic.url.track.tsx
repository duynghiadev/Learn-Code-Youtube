'use client'

import { useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

// https://wavesurfer-js.org/examples/#basic.js
const DynamicUrlTrack = () => {
    const waveformRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!waveformRef.current) return;
        const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#4F4A85',
            progressColor: '#383351',
            // url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`,
            // url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
            // fetchParams: {
            //     mode: "no-cors",
            //     // cache: "no-store",
            //     method: "GET"
            // },
            url: "/api"
        });



        wavesurfer.once('interaction', () => {
            wavesurfer.play()
        })

        //remove render twice
        return () => {
            wavesurfer.destroy();
        }
    }, []);


    return (
        <>
            <div ref={waveformRef}>
            </div>
        </>
    )
}

export default DynamicUrlTrack;