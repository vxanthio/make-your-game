import { test, expect } from 'vitest';
import { renderEntities } from '../../src/render/renderEntities.js';
test('positions the player using transform from state coordinates', () => {
  const state = {
    player: {
      x: 80,
      y: 120,
    },
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
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  renderEntities(state);
  expect(playerElement.style.top).toBe('');
  expect(playerElement.style.left).toBe('');
});
