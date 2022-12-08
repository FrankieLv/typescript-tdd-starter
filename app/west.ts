import { Facing } from './facing';
import { South } from './south';
import { North } from './north';
export class West implements Facing{
    turnLeft(): Facing{
        return new South();
    }

    turnRight(): Facing{
        return new North();
    }

    moveforward(x: number, y: number): any{
        return {x: --x, y: y};
    }

    backoff(x: number, y: number): any{
        return {x: ++x, y: y};
    }

    toString(): String{
        return "W";
    }
}