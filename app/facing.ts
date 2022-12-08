export interface Facing{
    turnLeft(): Facing;
    turnRight(): Facing;
    moveforward(x: number, y: number): any;
    backoff(x: number, y: number): any;
    toString(): String
}


