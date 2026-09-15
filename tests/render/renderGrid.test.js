import { test, expect } from 'vitest';
import { createPlayfieldDOM, renderGrid } from '../../src/render/renderGrid.js';
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
test('renders a wall cell with the wall modifier class', () => {
  const grid=[[{type:'wall'}]];
  const playfield=createPlayfieldDOM({
    rows:1,
    cols:1,
  });
  document.body.append(playfield);
  renderGrid(grid)
 const cell= playfield.querySelector('.playfield__cell')
 expect(cell.classList.contains('playfield__cell--wall')).toBe(true)
})