import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const Eye = () => {
  const eyeRef = useRef(null);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setEyePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const eye = eyeRef.current;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, eye.offsetWidth / eye.offsetHeight, 0.1, 1000);

    renderer.setSize(eye.offsetWidth, eye.offsetHeight);
    eye.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(10, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.position.x = eyePosition.x / 20 - 2.5;
      mesh.position.y = -eyePosition.y / 20 + 2.5;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      eye.removeChild(renderer.domElement);
    };
  }, [eyePosition]);

  return (
    <div className="eye" ref={eyeRef} style={{ width: '200px', height: '200px', position: 'relative' }} />
  );
};

export default Eye;
