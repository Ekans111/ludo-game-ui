import { useEffect, useState } from 'react';
import { Stage, Container, Graphics,  } from '@pixi/react';
// import * as PIXI from 'pixi.js';
// import { useGameStore } from '../store/gameStore';

// Constants for the Ludo board
const BOARD_SIZE = 600;
const CELL_SIZE = BOARD_SIZE / 15;
const PLAYER_COLORS = {
  RED: 0xff0000,
  GREEN: 0x00ff00,
  YELLOW: 0xffff00,
  BLUE: 0x0000ff,
};

const Board = () => {
  return (
    <Graphics
      draw={(g) => {
        // Draw the main board background
        g.clear();
        g.beginFill(0xffffff);
        g.drawRect(0, 0, BOARD_SIZE, BOARD_SIZE);
        g.endFill();

        // Draw the colored home areas
        const homeSize = CELL_SIZE * 6;
        // Red home (top-left)
        g.beginFill(PLAYER_COLORS.RED);
        g.drawRect(0, 0, homeSize, homeSize);
        // Green home (top-right)
        g.beginFill(PLAYER_COLORS.GREEN);
        g.drawRect(BOARD_SIZE - homeSize, 0, homeSize, homeSize);
        // Yellow home (bottom-right)
        g.beginFill(PLAYER_COLORS.YELLOW);
        g.drawRect(BOARD_SIZE - homeSize, BOARD_SIZE - homeSize, homeSize, homeSize);
        // Blue home (bottom-left)
        g.beginFill(PLAYER_COLORS.BLUE);
        g.drawRect(0, BOARD_SIZE - homeSize, homeSize, homeSize);

        // Draw the path cells
        g.lineStyle(1, 0x000000);
        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < 15; j++) {
            g.drawRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
          }
        }
      }}
    />
  );
};

const Piece = ({ x, y, color }) => {
  return (
    <Graphics
      draw={(g) => {
        g.clear();
        g.beginFill(color);
        g.drawCircle(0, 0, CELL_SIZE * 0.4);
        g.endFill();
      }}
      x={x}
      y={y}
    />
  );
};

export const GameScene = () => {
  // const isMuted = useGameStore((state) => state.isMuted);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate scale to fit the board on screen while maintaining aspect ratio
  const scale = Math.min(
    windowDimensions.width / (BOARD_SIZE + 40),
    windowDimensions.height / (BOARD_SIZE + 40)
  );

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <Stage
        width={windowDimensions.width}
        height={windowDimensions.height}
        options={{ backgroundColor: 0x1099bb, antialias: true }}
      >
        <Container
          position={[windowDimensions.width / 2, windowDimensions.height / 2]}
          scale={scale}
        >
          {/* Center the board */}
          <Container position={[-BOARD_SIZE / 2, -BOARD_SIZE / 2]}>
            <Board />
            {/* Example pieces - you'll need to manage these positions through game state */}
            <Piece x={CELL_SIZE * 1.5} y={CELL_SIZE * 1.5} color={PLAYER_COLORS.RED} />
            <Piece x={CELL_SIZE * 13.5} y={CELL_SIZE * 1.5} color={PLAYER_COLORS.GREEN} />
            <Piece x={CELL_SIZE * 13.5} y={CELL_SIZE * 13.5} color={PLAYER_COLORS.YELLOW} />
            <Piece x={CELL_SIZE * 1.5} y={CELL_SIZE * 13.5} color={PLAYER_COLORS.BLUE} />
          </Container>
        </Container>
      </Stage>
    </div>
  );
};