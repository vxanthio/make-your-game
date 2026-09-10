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
