import React, { useEffect } from 'react';
import { Stage, Container, Sprite } from '@pixi/react';
import { useGameStore } from '../store/gameStore';

export const GameScene = () => {
  const isMuted = useGameStore((state) => state.isMuted);

  useEffect(() => {
    // Initialize game logic here
  }, []);

  return (
    <div className="w-full h-screen">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        options={{ backgroundColor: 0x1099bb }}
      >
        <Container position={[window.innerWidth / 2, window.innerHeight / 2]}>
          {/* Add your game board and pieces here */}
        </Container>
      </Stage>
    </div>
  );
};