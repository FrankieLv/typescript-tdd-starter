import { Facing } from './facing';

export class Rover{
    x:number; y:number; facing:Facing;
    constructor(x:number, y:number, facing:Facing){
        this.x = x;
        this.y = y;
        this.facing = facing;
    }

    turnLeft(){
        this.facing = this.facing.turnLeft();
    }

    turnRight(){
        this.facing = this.facing.turnRight();
    }

    movefoward(){
        let nextPos: any = this.facing.moveforward(this.x, this.y);
        this.x = nextPos.x;
        this.y = nextPos.y;
    }

    backoff(){
        let nextPos: any = this.facing.backoff(this.x, this.y);
        this.x = nextPos.x;
        this.y = nextPos.y;
    }
}