import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Use a square aspect ratio
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    sceneRef.current.appendChild(renderer.domElement);

    // Set initial size for the renderer and container
    const containerSize = Math.min(window.innerWidth, window.innerHeight);
    renderer.setSize(containerSize, containerSize);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    console.log("made cube")

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const containerSize = Math.min(window.innerWidth, window.innerHeight);

      // Update camera aspect ratio and renderer size
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(containerSize, containerSize);
    };

    window.addEventListener('resize', handleResize);
    animate();

    //adding to restafdagfds
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={sceneRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeScene;
