import { test, expect } from 'vitest';
import { isWalkable } from '../../src/logic/movement.js';
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
