"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Constants for the grid size and spacing
const GRID_SIZE_X = 300; // Increased grid size in X to cover wider desktop screens
const GRID_SIZE_Y = 150; // Adjusted grid size in Y for consistency
const GRID_SPACING = 2; // Spacing between points

// Function to generate a grid of points
const createGridPoints = () => {
  const vertices: number[] = [];
  
  for (let x = -GRID_SIZE_X; x <= GRID_SIZE_X; x += GRID_SPACING) {
    for (let y = -GRID_SIZE_Y; y <= GRID_SIZE_Y; y += GRID_SPACING) {
      vertices.push(x, y, 0); // Initial Z is 0, will animate
    }
  }
  
  return new Float32Array(vertices);
};

// Shader material for realistic water waves
const WaterShaderMaterial = () => {
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.time.value = time;
    }
  });

  return (
    <shaderMaterial
      ref={shaderMaterialRef}
      attach="material"
      args={[{
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color('lightblue') }, // Water base color
          color2: { value: new THREE.Color('darkblue') },  // Water deep color
          lightPosition: { value: new THREE.Vector3(100, 100, 100) }, // Light source position
        },
        vertexShader: `
          uniform float time;
          varying vec3 vPosition;
          varying vec2 vUv;

          void main() {
            vUv = uv;
            vec3 pos = position;
            float wave = sin(pos.x * 0.1 + time) * cos(pos.y * 0.1 + time) * 10.0;
            pos.z += wave;
            vPosition = pos;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = 1.0; // Adjust point size
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform vec3 lightPosition;
          varying vec3 vPosition;
          varying vec2 vUv;

          void main() {
            vec3 lightDir = normalize(lightPosition - vPosition);
            float diff = max(dot(normalize(vec3(0.0, 0.0, 1.0)), lightDir), 0.0);
            vec3 color = mix(color1, color2, smoothstep(0.0, 1.0, vPosition.z / 10.0));
            gl_FragColor = vec4(color * diff, 1.0);
          }
        `,
      }]}
    />
  );
};

const WaveGrid: React.FC = () => {
  const gridRef = useRef<THREE.Points>(null);
  const vertices = useMemo(() => createGridPoints(), []);

  return (
    <points ref={gridRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={vertices}
          count={vertices.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <WaterShaderMaterial />
    </points>
  );
};

const SciFiBackgroundWaves: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 250], fov: 60 }} // Further adjusted camera position and FOV
      style={{ width: '100vw', height: '100vh', background: '#000' }} // Dark background for better contrast
    >
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[100, 100, 100]}
        intensity={0.8}
        color="#ffffff"
      />
      <WaveGrid />
    </Canvas>
  );
};

export default SciFiBackgroundWaves;
