import React, { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

const TheEyeThatFollows = () => {
    const eyeRef = useRef(null);
    const [eyePosition, setEyePosition] = useState({x :0, y: 0});

    const handleMouseMove = (event) => {
        console.log("mouse moved!")
        const x = event.clientX;
        const y = event.clientY;
        setEyePosition({x, y});
    };

    useEffect(() => {
        console.log("mouse moved, used effect")
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {

        if (!eyeRef.current) {
            return;
        }

        const eye = eyeRef.current;
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            45, eye.offsetWidth / eye.offsetHeight, 0.1, 1000);

        renderer.setSize(eye.offsetWidth, eye.offsetHeight);

        eye.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(10, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        camera.position.z = 50;

        const animate = () => {
            requestAnimationFrame(animate);

            const hue = (Date.now() /1000) % 1;
            const saturation = (Date.now() /1000) % 1;
            const lightness = (Date.now() /1000) % 1;

            mesh.material.color.setHSL(hue, saturation, lightness);

            mesh.position.x = eyePosition.x / 20 - 2.5;
            mesh.position.y = -eyePosition.y / 20 + 2.5;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            eye.removeChild(renderer.domElement);
        };
    }, [eyePosition, eyeRef]);

    return (
        <div className='eye' ref={eyeRef} style={{ width: '200px', height: '200px', position: 'relative'}}>
            <p>The Eye sees you!</p>
            <p>{eyePosition.x}  -  x </p>
            <p>{eyePosition.y}  -  y </p>
            {/*<div className='eyeball' style={{transform: `translate(${eyePosition.x}px, ${eyePosition.y}px` }} />*/}
        </div>
    );
};

export default TheEyeThatFollows;
