// src/game/core/GameCanvas.tsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import Court from '@/game/entities/Court';
import Player from '@/game/entities/Player';
import Ball from '@/game/entities/Ball';

const GameCanvas: React.FC = () => {
  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
      <color attach="background" args={[0x121212]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1.2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={null}>
        <Court />
        <Player />
        <Ball />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} />
      <Stats />
    </Canvas>
  );
};

export default GameCanvas;
