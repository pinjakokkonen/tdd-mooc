import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = new Tetromino(`
    .T.
    TTT
    ...
    `);

  constructor(grid) {
    this._grid = RotatingShape.fromString(grid);
  }

  toString() {
    return this._grid.toString();
  }
}