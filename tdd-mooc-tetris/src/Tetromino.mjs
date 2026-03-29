import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = Tetromino.fromString(0, 4, `
    .T.
    TTT
    ...
    `);

  static I_SHAPE = Tetromino.fromString(0, 2, `
    .....
    .....
    IIII.
    .....
    .....
    `);

  constructor(currentOrientation, orientations) {
    this.orientations = orientations;
  }

  static fromString(currentOrientation, differentOrientations, initialGrid) {
    const grid = RotatingShape.fromString(initialGrid);
    const orientations = [grid, grid.rotateRight(), grid.rotateRight().rotateRight(), grid.rotateRight().rotateRight().rotateRight()].slice(0, differentOrientations);
    return new Tetromino(currentOrientation, orientations);
  }

  rotateRight() {
    return this._grid.rotateRight();
  }

  rotateLeft() {
    return this._grid.rotateLeft();
  }

  toString() {
    return this._grid.toString();
  }
}