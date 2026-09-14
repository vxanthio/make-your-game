import { TILE_SIZE_PX } from '../constants.js';
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
    const attemptedX = entity.x + distance;
    const col = Math.floor(attemptedX / TILE_SIZE_PX);
    const row = Math.floor(entity.y / TILE_SIZE_PX);
    if (isWalkable(grid, row, col)) {
      entity.x = attemptedX;
    } else {
      entity.x = col * TILE_SIZE_PX - 1;
    }
  }
  if (direction === 'left') {
    const attemptedX = entity.x - distance;
    const col = Math.floor(attemptedX / TILE_SIZE_PX);
    const row = Math.floor(entity.y / TILE_SIZE_PX);
    if (isWalkable(grid, row, col)) {
      entity.x = attemptedX;
    } else {
      entity.x = (col + 1) * TILE_SIZE_PX;
    }
  }
  if (direction === 'down') {
    const attemptedY = entity.y + distance;
    const row = Math.floor(attemptedY / TILE_SIZE_PX);
    const col = Math.floor(entity.x / TILE_SIZE_PX);
    if (isWalkable(grid, row, col)) {
      entity.y = attemptedY;
    } else {
      entity.y = row * TILE_SIZE_PX - 1;
    }
  }
  if (direction === 'up') {
    entity.y -= distance;
  }
}
