

'use client'

import { useRef, useEffect, useState, useMemo } from "react";
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

const WavesurferHook = () => {
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

    return (
        <>
            <div ref={waveformRef}>
            </div>
        </>
    )
}

export default WavesurferHook;