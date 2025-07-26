import React, { useEffect, useRef } from 'react';
import * as ex from 'excalibur';
import { MazeScene } from '../utils/maze-scene';

const MazeGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<ex.Engine | null>(null);

  useEffect(() => {
    if (canvasRef.current && !gameRef.current) {
      const game = new ex.Engine({
        canvasElement: canvasRef.current,
        width: 800,
        height: 600,
        displayMode: ex.DisplayMode.FitScreen,
        backgroundColor: ex.Color.fromHex("#dcdcdcff")
      });

      const mazeScene = new MazeScene();
      game.add('maze', mazeScene);

      game.start().then(()=>{
        game.goToScene('maze');
      });
      gameRef.current = game;
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.stop();
        gameRef.current.dispose(); // Properly dispose of the engine
        gameRef.current = null;
      }
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};
export default MazeGame;
