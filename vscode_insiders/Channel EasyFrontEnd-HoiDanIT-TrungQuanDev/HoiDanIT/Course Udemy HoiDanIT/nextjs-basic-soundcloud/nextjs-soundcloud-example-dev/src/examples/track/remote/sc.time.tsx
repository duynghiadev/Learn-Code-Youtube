

'use client'

import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";
import './styles.css';
import { Container } from "@mui/material";
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

const ScTime = () => {
    const waveformRef = useRef<HTMLDivElement>(null);

    const options: Omit<WaveSurferOptions, "container"> = useMemo(() => {
        let gradient;
        let progressGradient;

        //render only in client
        if (typeof window !== 'undefined') {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;

            // Define the waveform gradient
            gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
            gradient.addColorStop(0, '#656666') // Top color
            gradient.addColorStop((canvas.height * 0.7) / canvas.height, '#656666') // Top color
            gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff') // White line
            gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff') // White line
            gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#B1B1B1') // Bottom color
            gradient.addColorStop(1, '#B1B1B1') // Bottom color

            // Define the progress gradient
            progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
            progressGradient.addColorStop(0, '#EE772F') // Top color
            progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, '#EB4926') // Top color
            progressGradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff') // White line
            progressGradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff') // White line
            progressGradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#F6B094') // Bottom color
            progressGradient.addColorStop(1, '#F6B094') // Bottom color

        }

        return {
            waveColor: gradient,
            progressColor: progressGradient,
            barWidth: 2,
            url: "/api",
            height: 100

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


    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const secondsRemainder = Math.round(seconds) % 60
        const paddedSeconds = `0${secondsRemainder}`.slice(-2)
        return `${minutes}:${paddedSeconds}`
    }

    if (wavesurfer) {
        const timeEl = document.querySelector('#time')!;
        const durationEl = document.querySelector('#duration')!;
        wavesurfer.on('decode', (duration) => (durationEl.textContent = formatTime(duration)))
        wavesurfer.on('timeupdate', (currentTime) => (timeEl.textContent = formatTime(currentTime)))
    }


    return (
        <Container sx={{
            position: "relative"
        }}>
            <div ref={waveformRef}>
                <div id="time">0:00</div>
                <div id="duration">0:00</div>
            </div>
            <div>
                <button onClick={() => handlePlayPause()}>Play/Pause</button>
            </div>
        </Container>
    )
}

export default ScTime;