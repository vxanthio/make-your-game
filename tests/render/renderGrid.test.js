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
