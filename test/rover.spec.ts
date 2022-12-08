import { expect } from 'chai';
import { Rover } from '../app/rover';
import { East } from '../app/east';
import { South } from '../app/south';
import { West } from '../app/west';
import { North } from '../app/north';
import * as forEach from 'mocha-each';

describe('turn left',  () => {
    forEach([[0,0, new East(), new North()],[0,0, new South(), new East()],[0,0,new West(), new South()],[0,0, new North(), new West()]]).it('if current rover: %d %d %s, turn left, then new facing is %s ', (x, y, facing, newfacing) => {
      const rover = new Rover(x, y, facing);
      rover.turnLeft();
      expect(rover.x).to.equal(0);
      expect(rover.y).to.equal(0);
      expect(rover.facing.toString()).to.equal(newfacing.toString());
    });
});

describe('turn right',  () => {
  forEach([[0,0, new East(), new South()],[0,0, new South(), new West()],[0,0,new West(), new North()],[0,0, new North(), new East()]]).it('if current rover: %d %d %s, turn right, then new facing is %s ', (x, y, facing, newfacing) => {
    const rover = new Rover(x, y, facing);
    rover.turnRight();
    expect(rover.x).to.equal(0);
    expect(rover.y).to.equal(0);
    expect(rover.facing.toString()).to.equal(newfacing.toString());
  });
});


describe('moveforward',  () => {
  forEach([[0,0, new East(), 1,0, new East()],[0,0, new South(), 0,-1, new South()],[0,0,new West(), -1,0, new West()],[0,0, new North(), 0,1, new North()]]).it('if current rover: %d %d %s, move forward 1 step, then the new rover should be %d %d %s ', (x, y, facing, newX, newY, newfacing) => {
    const rover = new Rover(x, y, facing);
    rover.movefoward();
    expect(rover.x).to.equal(newX);
    expect(rover.y).to.equal(newY);
    expect(rover.facing.toString()).to.equal(newfacing.toString());
  });
});

describe('backoff',  () => {
  forEach([[0,0, new East(), -1,0, new East()],[0,0, new South(), 0,1, new South()],[0,0,new West(), 1,0, new West()],[0,0, new North(), 0,-1, new North()]]).it('if current rover: %d %d %s, move forward 1 step, then the new rover should be %d %d %s ', (x, y, facing, newX, newY, newfacing) => {
    const rover = new Rover(x, y, facing);
    rover.backoff();
    expect(rover.x).to.equal(newX);
    expect(rover.y).to.equal(newY);
    expect(rover.facing.toString()).to.equal(newfacing.toString());
  });
});
