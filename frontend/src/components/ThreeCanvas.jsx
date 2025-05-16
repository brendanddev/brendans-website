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

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xffffff);

    const screenGeometry = new THREE.BoxGeometry(6, 4, 0.5);
    const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    scene.add(screen);


    // Group all parts
    const desktop = new THREE.Group();
    desktop.add(screen);
    scene.add(desktop);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const animate = () => {
      requestAnimationFrame(animate);
      desktop.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

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
