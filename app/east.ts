import { Facing } from './facing';
import { North } from './north';
import { South } from './south';

export class East implements Facing{
    turnLeft(): Facing{
        return new North();
    }

    turnRight(): Facing{
        return new South();
    }

    moveforward(x: number, y: number): any{
        return {x: ++x, y: y};
    }

    backoff(x: number, y: number): any{
        return {x: --x, y: y};
    }

    toString(): String{
        return "E";
    }
}
