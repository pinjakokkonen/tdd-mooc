export class Board {
  width;
  height;
  block = null;
  blockRow;
  blockColumn;
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
    this.block = block;
    this.blockRow = 0;
    this.blockColumn = 2;
  }

  tick() {
    if (this.blockRow<this.height-1 && this.grid[this.blockRow+1][this.blockColumn-1]==='.') {
      this.blockRow += 1;
    } else {
      this.grid[this.blockRow][this.blockColumn-1] = this.block;
      this.block = null;
    }
  }

  hasFalling() {
    return this.block !== null;
  }

  toString() {
    let string = '';
    for (let row=0; this.height>row; row++) {
      for (let column=1; this.width>=column; column++) {
        if (row===this.blockRow && column===2 && this.block) {
          string += this.block;
        } else {
          string += this.grid[row][column-1];
        }
      }
      string += '\n';
    }
    return string;
  }
}
