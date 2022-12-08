import { Facing } from './facing';
import { East } from './east';
import { West } from './west';
export class South implements Facing{
    turnLeft(): Facing{
        return new East();
    }

    turnRight(): Facing{
        return new West();
    }

    moveforward(x: number, y: number): any{
        return {x: x, y: --y};
    }

    backoff(x: number, y: number): any{
        return {x: x, y: ++y};
    }

    toString(): String{
        return "S";
    }

}