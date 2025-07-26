export const generateMaze = (width: number, height: number) => {
  const maze = Array.from({ length: height }, () => Array(width).fill(1));
  const stack: [number, number][] = [[1, 1]];
  maze[1][1] = 0;

  const carve = (cx: number, cy: number) => {
    const directions: [number, number, number, number][] = [
      [0, -2, 0, -1], // North
      [0, 2, 0, 1],  // South
      [-2, 0, -1, 0], // West
      [2, 0, 1, 0],   // East
    ];

    directions.sort(() => Math.random() - 0.5);

    for (const [dx, dy, wallDx, wallDy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (ny > 0 && ny < height - 1 && nx > 0 && nx < width - 1 && maze[ny][nx] === 1) {
        maze[cy + wallDy][cx + wallDx] = 0;
        maze[ny][nx] = 0;
        stack.push([nx, ny]);
        carve(nx, ny);
      }
    }
  };

  carve(1, 1);

  // Set start and end points
  maze[1][1] = 2; // Start
  maze[height - 2][width - 2] = 3; // End

  return maze;
};