export class Board {
  width;
  height;
  block = null;
  grid;


  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: height }, () => Array.from({ length: width }, () => '.'));
  }

  drop(block) {
    if (this.block) {
      throw new Error("already falling");
    }
    if (this.isTetromino(block)){
      const shape = block.orientations[block.currentOrientation];
      const grid = shape.grid;
      const column = Math.floor((this.width - grid[0].length) / 2);
      const row = 0;
      this.block = { block, row, column, shape };
      for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
          if (grid[r][c] !== "." && 0 + r >= 0 && 0 + r < this.height && column + c >= 0 && column + c < this.width) {
            this.grid[0 + r][column + c] = grid[r][c];
          }
        }
      }
    } else {
    this.block = block;
    this.blockRow = 0;
    this.blockColumn = Math.floor((this.width-this.block.length)/2);
    }
  }

  tick() {
    if (this.blockRow<this.height-1 && this.grid[this.blockRow+1][this.blockColumn]==='.') {
      this.blockRow += 1;
    } else {
      this.grid[this.blockRow][this.blockColumn] = this.block;
      this.block = null;
    }
  }

  hasFalling() {
    return this.block !== null;
  }

  isTetromino(value) {
    return value && typeof value.currentOrientation === "number" && Array.isArray(value.orientations) && value.orientations[value.currentOrientation] && Array.isArray(value.orientations[value.currentOrientation].grid);
  }

  toString() {
    let string = '';
    for (let row=0; this.height>row; row++) {
      for (let column=0; this.width>column; column++) {
        if (row===this.blockRow && column===this.blockColumn && this.block) {
          string += this.block;
        } else {
          string += this.grid[row][column];
        }
      }
      string += '\n';
    }
    return string;
  }
}
