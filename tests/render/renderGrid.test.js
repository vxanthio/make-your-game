import { test, expect } from 'vitest';
import { createPlayfieldDOM } from '../../src/render/renderGrid.js';
test('create a playfield DOM with the correct number of cells', () => {
  const playfield = createPlayfieldDOM({
    rows: 11,
    cols: 13,
  });
  const cells = playfield.querySelectorAll('.playfield__cell');
  expect(cells.length).toBe(143);
});
test('playfield DOM has the correct coordinates for a cell', () => {
  const playfield = createPlayfieldDOM({
    rows: 11,
    cols: 13,
  });
  const cells = playfield.querySelectorAll('.playfield__cell');
  const cell = cells[30];
  expect(cell.dataset.row).toBe('2');
  expect(cell.dataset.col).toBe('4');
});
