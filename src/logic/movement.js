export function isWalkable(grid, row, col) {
  if (grid[row][col] === 'empty') {
    return true;
  }
  if (grid[row][col] === 'exit') {
    return true;
  }
}
