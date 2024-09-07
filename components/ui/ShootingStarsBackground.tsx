"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const ShootingStarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const width = canvas.parentElement?.clientWidth || window.innerWidth;
    const height = canvas.parentElement?.clientHeight || window.innerHeight;

    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio); // Handle high-DPI screens

    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const starVertices = new Float32Array(10000 * 3); // 10000 stars, 3 coordinates (x, y, z)

    for (let i = 0; i < starVertices.length; i += 3) {
      starVertices[i] = Math.random() * 2000 - 1000;
      starVertices[i + 1] = Math.random() * 2000 - 1000;
      starVertices[i + 2] = Math.random() * 2000 - 1000;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create shooting stars
    const shootingStars: THREE.Line[] = [];
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    function createShootingStar() {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(2 * 3); // 2 points, 3 coordinates (x, y, z)
      const start = new THREE.Vector3(Math.random() * 2000 - 1000, Math.random() * 2000 - 1000, Math.random() * 2000 - 1000);
      const end = start.clone().add(new THREE.Vector3(Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100));
      positions.set([start.x, start.y, start.z, end.x, end.y, end.z]);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const line = new THREE.Line(geometry, lineMaterial);
      shootingStars.push(line);
      scene.add(line);
    }

    for (let i = 0; i < 10; i++) {
      createShootingStar();
    }

    // Animate
    const speed = 1; // Speed at which stars move
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      shootingStars.forEach(star => {
        const positions = star.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] -= speed; // Move in the X direction
          if (positions[i] < -1000) { // Wrap around to the other side
            positions[i] = 1000;
            positions[i + 1] = Math.random() * 2000 - 1000; // Random Y position
            positions[i + 2] = Math.random() * 2000 - 1000; // Random Z position
          }
        }
        star.geometry.attributes.position.needsUpdate = true;
      });
    }

    camera.position.z = 500;
    animate();

    // Handle resizing
    function handleResize() {
      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', handleResize);

    // Clean up resources on unmount
    return () => {
      window.removeEventListener('resize', handleResize);

      // Dispose of geometries and materials
      starGeometry.dispose();
      starMaterial.dispose();
      shootingStars.forEach(star => {
        star.geometry.dispose();
        if (Array.isArray(star.material)) {
          star.material.forEach((material) => material.dispose());
        } else {
          star.material.dispose();
        }
      });

      // Optionally dispose of renderer
      renderer.dispose();
    };
  }, []);

  return (
    <motion.canvas
      className="absolute inset-0 z-0"
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ width: '100%', height: '100%' }} // Make sure canvas takes up full size of parent
    />
  );
};

export default ShootingStarsBackground;
