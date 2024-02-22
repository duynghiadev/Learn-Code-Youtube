

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
            renderFunction: (channels, ctx) => {
                const { width, height } = ctx.canvas;
                const barWidth = options.barWidth || 2;
                const barGap = options.barGap || 1;
                const barRadius = options.barRadius || 0;
                const separationLineHeight = 0.5; // Height of the separation line

                const barCount = Math.floor(width / (barWidth + barGap));
                const step = Math.floor(channels[0].length / barCount);

                const topPartHeight = height * 0.7; // Define top part height
                const bottomPartHeight = height * 0.3; // Define bottom part height

                ctx.beginPath();

                for (let i = 0; i < barCount; i++) {
                    let sumTop = 0;
                    let sumBottom = 0;

                    for (let j = 0; j < step; j++) {
                        const index = i * step + j;
                        const topValue = Math.abs(channels[0][index] || 0);
                        const bottomValue = Math.abs(channels[1]?.[index] || 0);

                        sumTop += topValue;
                        sumBottom += bottomValue;
                    }

                    const avgTop = sumTop / step;
                    const avgBottom = sumBottom / step;

                    // const barHeight = (avgTop + avgBottom)/2;

                    const barHeight = (avgTop + avgBottom) * 1.2;

                    // Vertical alignment
                    let yTop = topPartHeight - (barHeight * topPartHeight);
                    let yBottom = topPartHeight + (barHeight * bottomPartHeight);

                    if (options.barAlign === 'top') {
                        yTop = 0;
                        yBottom = bottomPartHeight;
                    } else if (options.barAlign === 'bottom') {
                        yTop = height - topPartHeight;
                        yBottom = height;
                    }

                    ctx.rect(i * (barWidth + barGap), yTop, barWidth, barHeight * topPartHeight);
                    ctx.rect(i * (barWidth + barGap), yBottom - (barHeight * bottomPartHeight), barWidth, barHeight * bottomPartHeight);
                }

                // // Draw separation line
                // ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                // ctx.rect(0, topPartHeight - separationLineHeight / 2, width, separationLineHeight);

                ctx.fill();
                ctx.closePath();




            },
        })

        setWavesurfer(ws);

        //remove duplicate
        return () => {
            ws.destroy()
        }
    }, [containerRef, options])

    return wavesurfer;
}

const CustomizeRender = () => {
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
            height: 100,
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
            position: "relative",
            background: "#373737"
        }}

        >

            <div ref={waveformRef} style={{ position: "relative", overflow: "hidden", }}>
                <div id="time">0:00</div>
                <div id="duration">0:00</div>
                <div className="overlay"
                    style={{
                        position: "absolute",
                        height: "30px",
                        width: "100%",
                        bottom: "0",
                        // background: "#ccc"
                        backdropFilter: "brightness(0.5)"
                    }}
                >

                </div>
            </div>


            <div>
                <button onClick={() => handlePlayPause()}>Play/Pause</button>
            </div>
        </Container>
    )
}

export default CustomizeRender;