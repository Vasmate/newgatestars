// src/ui/pages/PlayPage.tsx
import React from 'react';
import GameCanvas from '@/game/core/GameCanvas';

const PlayPage: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-dark">
      <GameCanvas />
    </div>
  );
};

export default PlayPage;
