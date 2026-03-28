import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = new Tetromino(`
    .T.
    TTT
    ...
    `);

  static I_SHAPE = new Tetromino(`
    .....
    .....
    IIII.
    .....
    .....
    `);

  constructor(grid) {
    this._grid = RotatingShape.fromString(grid);
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