export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let string = '';
    for (let row=1; this.height>=row; row++) {
      for (let column=1; this.width>=column; column++) {
        string += '.';
      }
      string += '\n';
    }
    return string;
  }
}
