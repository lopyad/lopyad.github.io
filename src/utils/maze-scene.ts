
import * as ex from 'excalibur';
import { generateMaze } from './maze';
import { Wall, Player, Goal } from './actors';

export class MazeScene extends ex.Scene {
    private mazeData: number[][] = [];
    private readonly mazeWidth = 11; // Must be odd
    private readonly mazeHeight = 9; // Must be odd
    private readonly cellWidth = 40;
    private readonly cellHeight = 40;

    onInitialize(engine: ex.Engine) {
        // this.actors.forEach(actor => this.remove(actor)); // Clear previous actors

        this.mazeData = generateMaze(this.mazeWidth, this.mazeHeight);

        const gameWidth = this.mazeWidth * this.cellWidth;
        const gameHeight = this.mazeHeight * this.cellHeight;

        for (let y = 0; y < this.mazeHeight; y++) {
            for (let x = 0; x < this.mazeWidth; x++) {
                const cellX = x * this.cellWidth - gameWidth / 2 + this.cellWidth / 2;
                const cellY = y * this.cellHeight - gameHeight / 2 + this.cellHeight / 2;

                const cellType = this.mazeData[y][x];

                if (cellType === 1) { // Wall
                    const wall = new Wall(cellX, cellY, this.cellWidth, this.cellHeight);
                    this.add(wall);
                } else if (cellType === 2) { // Player Start
                    const player = new Player(cellX, cellY, this.cellWidth * 0.5, this.cellHeight * 0.5);
                    this.add(player);this
                    this.camera.strategy.lockToActor(player);
                    this.camera.zoom = 2.5;
                } else if (cellType === 3) { // Goal
                    const goal = new Goal(cellX, cellY, this.cellWidth * 0.7, this.cellHeight * 0.7);
                    this.add(goal);
                }
            }
        }
    }
}
