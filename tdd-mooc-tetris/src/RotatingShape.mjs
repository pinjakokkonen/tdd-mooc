export class RotatingShape {
  constructor(grid) {
    this.grid = grid;
  }

  static fromString(string) {
    const grid = string.replaceAll(' ', '').trim().split('\n').map((row) => row.split(''));
    return new RotatingShape(grid);
  }

  rotateRight() {
    const height = this.grid.length;
    const width = this.grid[0].length;
    let newGrid = new Array(height);
    for (let row=0; row<height; row++) {
        newGrid[row] = new Array(width);
      for (let column=0; column<width; column++) {
        newGrid[row][column] = this.grid[width-column-1][row];
      }
    }
    return new RotatingShape(newGrid);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }

  toString() {
    return this.grid.map(row => row.join('')).join('\n') + '\n';
  }
}