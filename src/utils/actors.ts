
import * as ex from 'excalibur';

// Wall Actor
export class Wall extends ex.Actor {
    constructor(x: number, y: number, width: number, height: number) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            color: ex.Color.fromHex("#000000"), // Darker wall color
            collisionType: ex.CollisionType.Fixed
        });
    }
}

// Goal Actor
export class Goal extends ex.Actor {
    constructor(x: number, y: number, width: number, height: number) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            color: ex.Color.Green,
            collisionType: ex.CollisionType.Passive // Player can pass through
        });
    }
}

// Player Actor
export class Player extends ex.Actor {
    constructor(x: number, y: number, width: number, height: number) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            color: ex.Color.Red,
            collisionType: ex.CollisionType.Active
        });
    }

    onInitialize(engine: ex.Engine) {
        // this.on('collisionstart', (evt) => {
        //     if (evt.other instanceof Goal) {
        //         alert("You win!");
        //         engine.goToScene('maze'); // Restart
        //     }
        // });
    }

    override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof Goal) {
            alert("You win!");
            // ex.Engine.goToScene('maze'); // Restart
        }
    }

    onPreUpdate(engine: ex.Engine, delta: number) {
        const speed = 200; // Increased speed
        let dx = 0;
        let dy = 0;

        if (engine.input.keyboard.isHeld(ex.Keys.W) || engine.input.keyboard.isHeld(ex.Keys.Up)) {
            dy = -1;
        }
        if (engine.input.keyboard.isHeld(ex.Keys.S) || engine.input.keyboard.isHeld(ex.Keys.Down)) {
            dy = 1;
        }
        if (engine.input.keyboard.isHeld(ex.Keys.A) || engine.input.keyboard.isHeld(ex.Keys.Left)) {
            dx = -1;
        }
        if (engine.input.keyboard.isHeld(ex.Keys.D) || engine.input.keyboard.isHeld(ex.Keys.Right)) {
            dx = 1;
        }

        const direction = new ex.Vector(dx, dy);
        if (direction.size > 0) {
            this.vel = direction.normalize().scale(speed);
        } else {
            this.vel = ex.Vector.Zero;
        }
    }
}
