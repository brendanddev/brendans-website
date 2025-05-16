/**
 * @file ThreeCanvas.jsx
 * @author Brendan Dileo
 * @date 2025
 */

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xffffff);

    // Screen
    const screenGeometry = new THREE.BoxGeometry(6, 4, 0.5);
    const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);

    // Stand
    const standGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
    const standMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
    const stand = new THREE.Mesh(standGeometry, standMaterial);
    stand.position.y = -3;

    // Base
    const baseGeometry = new THREE.BoxGeometry(3, 0.2, 2);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -4;

    // Overlay Window
    const overlayGeometry = new THREE.BoxGeometry(5.5, 3.5, 0.05);
    const overlayMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
    overlay.position.set(0, 0, 0.28);

    // Mock OS Overlay
    const homeScreen = new THREE.Group();

    // Background
    const homeBGGeometry = new THREE.PlaneGeometry(5.4, 3.4);
    const homeBGMaterial = new THREE.MeshBasicMaterial({ color: 0x1e1e2f });
    const homeBG = new THREE.Mesh(homeBGGeometry, homeBGMaterial);
    homeBG.position.z = 0.03;
    homeScreen.add(homeBG);

    // Icons
    const iconGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.05);
    const iconMaterial = new THREE.MeshBasicMaterial({ color: 0x3399ff });

    // Taskbar
    const taskbarGeometry = new THREE.PlaneGeometry(5.4, 0.4);
    const taskbarMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const taskbar = new THREE.Mesh(taskbarGeometry, taskbarMaterial);
    taskbar.position.set(0, -1.45, 0.04);
    homeScreen.add(taskbar);

    overlay.add(homeScreen);

    // Keyboard
    const keyboardGeometry = new THREE.BoxGeometry(4, 0.3, 1.2);
    const keyboardMaterial = new THREE.MeshStandardMaterial({ color: 0x2a2a72 });
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
    keyboard.position.set(0, -4.3, 1.5);

    //Component group
    const desktop = new THREE.Group();
    desktop.add(screen);
    desktop.add(stand);
    desktop.add(base);
    desktop.add(overlay);
    desktop.add(keyboard);

    desktop.scale.set(1.5, 1.5, 1.5);
    desktop.position.y = 1;
    scene.add(desktop);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    //Animation
    const animate = () => {
      requestAnimationFrame(animate);
      desktop.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    //Window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-screen block"
    />
  );
};

export default ThreeCanvas;
