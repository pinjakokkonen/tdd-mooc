export class RotatingShape {
  constructor(grid) {
    this.grid = grid;
  }

  static fromString(string) {
    const grid = string.replaceAll(' ', '').trim().split('\n').map((row) => row.split(''));
    return new RotatingShape(grid);
  }

  toString() {
    return this.grid.map(row => row.join('')).join('\n') + '\n';
  }
}