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
  const cells = playfield.querySelectorAll('.playfield__cell');
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col].type === 'wall') {
        cells[row * grid[row].length + col].classList.add('playfield__cell--wall');
      } else if (grid[row][col].type === 'soft') {
        cells[row * grid[row].length + col].classList.add('playfield__cell--soft');
      }
    }
  }
}
