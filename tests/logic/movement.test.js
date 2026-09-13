import { test, expect } from 'vitest';
import { isWalkable, moveEntity } from '../../src/logic/movement.js';
test('returns true for an empty cell', () => {
  const grid = [['empty']];
  const result = isWalkable(grid, 0, 0);
  expect(result).toBe(true);
});
test('returns true for the exit cell', () => {
  const grid = [['exit']];
  const result = isWalkable(grid, 0, 0);
  expect(result).toBe(true);
});
test('return false for a wall cell', () => {
  const grid = [['wall']];
  const result = isWalkable(grid, 0, 0);
  expect(result).toBe(false);
});
test('return false for a soft cell', () => {
  const grid = [['soft']];
  const result = isWalkable(grid, 0, 0);
  expect(result).toBe(false);
});
test('return false for an empty cell out of bound', () => {
  const grid = [['empty']];
  const result = isWalkable(grid, -1, 0);
  expect(result).toBe(false);
});
test('returns false when the row is beyond the grid', () => {
  const grid = [['empty']];
  const result = isWalkable(grid, 5, 0);
  expect(result).toBe(false);
});
test('return false when the col is beyond the grid', () => {
  const grid = [['empty']];
  const result = isWalkable(grid, 0, 5);
  expect(result).toBe(false);
});
test('increase x possition when entity goes right', () => {
  const entity = {
    x: 0,
    y: 0,
    speed: 0.15,
  };
  const dt = 20;
  const direction = 'right';
  const grid = [['empty', 'empty']];
  moveEntity(entity, dt, direction, grid);
  expect(entity.x).toBe(3);
  expect(entity.y).toBe(0);
});
test('decrease x possition when entity goes left', () => {
  const entity = {
    x: 10,
    y: 0,
    speed: 0.15,
  };
  const dt = 20;
  const direction = 'left';
  const grid = [['empty', 'empty']];
  moveEntity(entity, dt, direction, grid);
  expect(entity.x).toBe(7);
  expect(entity.y).toBe(0);
});
test('increase y possition when the entity goes down', () => {
  const entity = {
    x: 0,
    y: 10,
    speed: 0.15,
  };
  const dt = 20;
  const direction = 'down';
  const grid = [['empty', 'empty']];
  moveEntity(entity, dt, direction, grid);
  expect(entity.y).toBe(13);
  expect(entity.x).toBe(0);
});
