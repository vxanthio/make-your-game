export function renderEntities(state) {
  const player = document.querySelector('.sprite--player');
  player.style.transform = `translate(${state.player.x}px, ${state.player.y}px)`;
  for (const enemy of state.enemies) {
    const enemyElement = document.querySelector(`.sprite--enemy[data-entity-id='${enemy.id}']`);
    enemyElement.style.transform = `translate(${enemy.x}px, ${enemy.y}px)`;
  }
}
