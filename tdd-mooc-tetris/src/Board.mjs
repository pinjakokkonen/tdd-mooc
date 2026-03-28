export class Board {
  width;
  height;
  block;
  blockRow;
  blockColumn;


  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drop(block) {
    if (this.block) {
      throw new Error("already falling");
    }
    this.block = block;
    this.blockRow = 1;
    this.blockColumn = 2;
  }

  tick() {
    this.blockRow += 1;
  }

  hasFalling() {
    return true;
  }

  toString() {
    let string = '';
    for (let row=1; this.height>=row; row++) {
      for (let column=1; this.width>=column; column++) {
        if (row===this.blockRow && column===2 && this.block) {
          string += this.block;
        } else {
          string += '.';
        }
      }
      string += '\n';
    }
    return string;
  }
}
