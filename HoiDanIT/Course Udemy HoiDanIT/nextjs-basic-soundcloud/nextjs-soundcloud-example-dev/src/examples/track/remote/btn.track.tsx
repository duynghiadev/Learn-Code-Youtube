

'use client'

import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";

// https://wavesurfer-js.org/examples/#react.js
// WaveSurfer hook
const useWavesurfer = (containerRef: React.RefObject<HTMLDivElement>, options: Omit<WaveSurferOptions, "container">) => {
    const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!containerRef.current) return;

        const ws = WaveSurfer.create({
            ...options,
            container: containerRef.current,
        })

        setWavesurfer(ws);

        //remove duplicate
        return () => {
            ws.destroy()
        }
    }, [containerRef, options])

    return wavesurfer;
}

const BtnTrack = () => {
    const waveformRef = useRef<HTMLDivElement>(null);

    const options = useMemo(() => {
        return {
            waveColor: '#4F4A85',
            progressColor: '#383351',
            url: "/api"
        }
    }, []);

    const wavesurfer = useWavesurfer(waveformRef, options);
    if (wavesurfer) {
        wavesurfer.once('interaction', () => {
            wavesurfer.play()
        })
    }

    // const handlePlayPause = () => {
    //     if (wavesurfer) {
    //         wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
    //     }
    // }

    const handlePlayPause = useCallback(() => {
        if (wavesurfer) {
            wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
        }
    }, [wavesurfer])


    return (
        <>
            <div ref={waveformRef}>
            </div>
            <div>
                <button onClick={() => handlePlayPause()}>Play/Pause</button>
            </div>
        </>
    )
}

export default BtnTrack;