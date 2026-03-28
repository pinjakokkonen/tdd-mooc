export class Board {
  width;
  height;
  block;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drop(block) {
    this.block = block;
  }

  toString() {
    let string = '';
    for (let row=1; this.height>=row; row++) {
      for (let column=1; this.width>=column; column++) {
        if (row===1 && column===2 && this.block) {
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
