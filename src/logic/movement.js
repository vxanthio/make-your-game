export function isWalkable(grid, row, col) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length) {
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
export function moveEntity(entity, dt, direction, grid) {
  const distance = entity.speed * dt;
  if (direction === 'right') {
    entity.x += distance;
  }
  if (direction === 'left') {
    entity.x -= distance;
  }
  if (direction === 'down') {
    entity.y += distance;
  }
}
