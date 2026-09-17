import { TILE_SIZE_PX } from '../constants.js';
export function renderEntities(state) {
  const player = document.querySelector('.sprite--player');
  player.style.transform = `translate(${state.player.x}px, ${state.player.y}px)`;
  for (const enemy of state.enemies) {
    const enemyElement = document.querySelector(`.sprite--enemy[data-entity-id='${enemy.id}']`);
    enemyElement.style.transform = `translate(${enemy.x}px, ${enemy.y}px)`;
  }
  for (const bomb of state.bombs) {
    const bombElement = document.querySelector(`.sprite--bomb[data-entity-id='${bomb.id}']`);
    bombElement.style.transform = `translate(${bomb.col * TILE_SIZE_PX}px, ${bomb.row * TILE_SIZE_PX}px)`;
  }
}
