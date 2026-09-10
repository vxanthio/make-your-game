export function isWalkable(grid, row, col) {
  if (row < 0 || col < 0 || row >= grid.length) {
    return false;
  }
  if (grid[row][col] === 'empty') {
    return true;
  }
  if (grid[row][col] === 'exit') {
    return true;
  }
  if (grid[row][col] === 'wall') {
    return false;
  }
  if (grid[row][col] === 'soft') {
    return false;
  }
}
