export function createPlayfieldDOM(config) {
  const playfield = document.createElement('div');
  playfield.classList.add('playfield');
  const totalCells = config.rows * config.cols;
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('playfield__cell');
    playfield.append(cell);
  }
  return playfield;
}
