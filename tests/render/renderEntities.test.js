import { test, expect, afterEach } from 'vitest';
import { renderEntities } from '../../src/render/renderEntities.js';
afterEach(() => {
  document.body.innerHTML = '';
});
test('positions the player using transform from state coordinates', () => {
  const state = {
    player: {
      x: 80,
      y: 120,
    },
    enemies: [],
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  renderEntities(state);
  expect(playerElement.style.transform).toBe('translate(80px, 120px)');
});
test('positions the player without using top or left', () => {
  const state = {
    player: {
      x: 80,
      y: 120,
    },
    enemies: [],
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  renderEntities(state);
  expect(playerElement.style.top).toBe('');
  expect(playerElement.style.left).toBe('');
});
test('positions the enemy using transform from state coordinates', () => {
  const state = {
    enemies: [
      {
        id: 'enemy-1',
        x: 160,
        y: 200,
      },
    ],
    player: {
      x: 0,
      y: 0,
    },
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  const enemyElement = document.createElement('div');
  enemyElement.classList.add('sprite--enemy');
  enemyElement.dataset.entityId = 'enemy-1';
  document.body.append(enemyElement);
  renderEntities(state);
  expect(enemyElement.style.transform).toBe('translate(160px, 200px)');
});
test('positions the correct enemy by entity id', () => {
  const state = {
    enemies: [
      {
        id: 'enemy-1',
        x: 60,
        y: 100,
      },
      {
        id: 'enemy-2',
        x: 160,
        y: 200,
      },
    ],
    player: {
      x: 0,
      y: 0,
    },
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  const enemyElement1 = document.createElement('div');
  enemyElement1.classList.add('sprite--enemy');
  enemyElement1.dataset.entityId = 'enemy-1';
  document.body.append(enemyElement1);
  const enemyElement2 = document.createElement('div');
  enemyElement2.classList.add('sprite--enemy');
  enemyElement2.dataset.entityId = 'enemy-2';
  document.body.append(enemyElement2);
  renderEntities(state);
  expect(enemyElement1.style.transform).toBe('translate(60px, 100px)');
  expect(enemyElement2.style.transform).toBe('translate(160px, 200px)');
});
