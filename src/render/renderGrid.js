export function createPlayfieldDOM(config) {
  const playfield = document.createElement('div');
  playfield.classList.add('playfield');
  const totalCells = config.rows * config.cols;
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('playfield__cell');
    cell.dataset.row = Math.floor(i / config.cols);
    cell.dataset.col = i % config.cols;
    playfield.append(cell);
  }
  return playfield;
}
export function renderGrid(grid) {
  const playfield = document.querySelector('.playfield');
  const cell = playfield.querySelector('.playfield__cell');
  if (grid[0][0].type === 'wall') {
    cell.classList.add('playfield__cell--wall');
  }
}
