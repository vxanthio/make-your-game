export function renderEntities(state) {
  const player = document.querySelector('.sprite--player');
  player.style.transform = `translate(${state.player.x}px, ${state.player.y}px)`;
}
