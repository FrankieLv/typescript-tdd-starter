import { Facing } from './facing';
import { West } from './west';
import { East } from './east';
export class North implements Facing{
    turnLeft(): Facing{
        return new West();
    }

    turnRight(): Facing{
        return new East();
    }

    moveforward(x: number, y: number): any{
        return {x: x, y: ++y};
    }

    backoff(x: number, y: number): any{
        return {x: x, y: --y};
    }

    toString(): String{
        return "N";
    }
}