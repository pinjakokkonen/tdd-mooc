export class RotatingShape {
  constructor(grid) {
    this.grid = grid;
  }

  static fromString(string) {
    const grid = string.replaceAll(' ', '').trim().split('\n').map((row) => row.split(''));
    return new RotatingShape(grid);
  }

  rotateRight() {
    let newGrid = new Array(this.grid.length);
    for (let row=0; row<this.grid.length; row++) {
        newGrid[row] = new Array(this.grid[0].length);
      for (let column=0; column<this.grid[0].length; column++) {
        newGrid[row][column] = this.grid[this.grid[0].length-column-1][row];
      }
    }
    return new RotatingShape(newGrid);
  }
  rotateLeft() {
    let newGrid = new Array(this.grid.length);
    for (let row=0; row<this.grid.length; row++) {
        newGrid[row] = new Array(this.grid[0].length);
      for (let column=0; column<this.grid[0].length; column++) { newGrid[row][column] = this.grid[column][this.grid.length-row-1]; }
    }
    return new RotatingShape(newGrid);
  }

  toString() {
    return this.grid.map(row => row.join('')).join('\n') + '\n';
  }
}