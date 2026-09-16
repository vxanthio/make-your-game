import { test, expect, afterEach } from 'vitest';
import { createPlayfieldDOM, renderGrid } from '../../src/render/renderGrid.js';
afterEach(() => {
  document.body.innerHTML = '';
});
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
  const grid = [[{ type: 'wall' }]];
  const playfield = createPlayfieldDOM({
    rows: 1,
    cols: 1,
  });
  document.body.append(playfield);
  renderGrid(grid);
  const cell = playfield.querySelector('.playfield__cell');
  expect(cell.classList.contains('playfield__cell--wall')).toBe(true);
});
test('renders the wall modifier class on the correct cell in a multi-cell grid', () => {
  const grid = [[{ type: 'empty' }, { type: 'wall' }]];
  const playfield = createPlayfieldDOM({
    rows: 1,
    cols: 2,
  });
  document.body.append(playfield);
  renderGrid(grid);
  const cells = playfield.querySelectorAll('.playfield__cell');
  expect(cells[1].classList.contains('playfield__cell--wall')).toBe(true);
});
test('render a soft cell with the soft modifier class', () => {
  const grid = [[{ type: 'empty' }, { type: 'soft' }]];
  const playfield = createPlayfieldDOM({
    rows: 1,
    cols: 2,
  });
  document.body.append(playfield);
  renderGrid(grid);
  const cells = playfield.querySelectorAll('.playfield__cell');
  expect(cells[1].classList.contains('playfield__cell--soft')).toBe(true);
});
test('renders an exit cell with the exit modifier class', () => {
  const grid = [[{ type: 'empty' }, { type: 'exit' }]];
  const playfield = createPlayfieldDOM({
    rows: 1,
    cols: 2,
  });
  document.body.append(playfield);
  renderGrid(grid);
  const cells = playfield.querySelectorAll('.playfield__cell');
  expect(cells[1].classList.contains('playfield__cell--exit')).toBe(true);
});
test('removes the old modifier class when a cell becomes empty', () => {
  const grid = [[{ type: 'soft' }]];
  const playfield = createPlayfieldDOM({
    rows: 1,
    cols: 1,
  });
  document.body.append(playfield);
  renderGrid(grid);
  const cells = playfield.querySelectorAll('.playfield__cell');
  grid[0][0].type = 'empty';
  renderGrid(grid);
  expect(cells[0].classList.contains('playfield__cell--soft')).toBe(false);
});
test('replace the soft modifier class with the exit modifier class',()=>{
const grid=[[{type:'soft'}]];
const playfield=createPlayfieldDOM({
  rows:1,
  cols:1,
});
document.body.append(playfield);
renderGrid(grid);
const cells=playfield.querySelectorAll('.playfield__cell');
grid[0][0].type='exit';
renderGrid(grid);
expect(cells[0].classList.contains('playfield__cell--exit')).toBe(true);
expect(cells[0].classList.contains('playfield__cell--soft')).toBe(false);
});