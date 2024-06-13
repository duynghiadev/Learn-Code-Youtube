'use client'

import { useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

// https://wavesurfer-js.org/examples/#basic.js
const WaveTrack = () => {
    const waveformRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!waveformRef.current) return;
        const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#4F4A85',
            progressColor: '#383351',
            url: "/tracks/hoidanit.mp3",
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

export default WaveTrack;