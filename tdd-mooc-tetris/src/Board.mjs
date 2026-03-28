export class Board {
  width;
  height;
  block;
  blockRow;
  blockColumn;
  grid;
  falling=false;


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
    this.blockRow = 1;
    this.blockColumn = 2;
    this.falling = true;
  }

  tick() {
    if (this.blockRow<this.height) {
      this.blockRow += 1;
    } else {this.falling = false;}
  }

  hasFalling() {
    return this.falling;
  }

  toString() {
    let string = '';
    for (let row=1; this.height>=row; row++) {
      for (let column=1; this.width>=column; column++) {
        if (row===this.blockRow && column===2 && this.block) {
          string += this.block;
        } else {
          string += this.grid[row-1][column-1];
        }
      }
      string += '\n';
    }
    return string;
  }
}
