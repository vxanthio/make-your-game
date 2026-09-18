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
    bombs: [],
    explosions: [],
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  renderEntities(state);
  expect(playerElement.style.transform).toBe('translate(80px, 120px)');
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
    bombs: [],
    explosions: [],
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
    bombs: [],
    explosions: [],
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
test('positions a bomb using grid coordinates', () => {
  const state = {
    bombs: [
      {
        id: 'bomb-1',
        col: 3,
        row: 2,
      },
    ],
    enemies: [],
    explosions: [],
    player: {
      x: 0,
      y: 0,
    },
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  const bombElement = document.createElement('div');
  bombElement.classList.add('sprite--bomb');
  bombElement.dataset.entityId = 'bomb-1';
  document.body.append(bombElement);
  renderEntities(state);
  expect(bombElement.style.transform).toBe('translate(120px, 80px)');
});
test('positions the correct bomb by entity id', () => {
  const state = {
    bombs: [
      {
        id: 'bomb-1',
        col: 3,
        row: 2,
      },
      {
        id: 'bomb-2',
        col: 5,
        row: 4,
      },
    ],
    enemies: [],
    explosions: [],
    player: {
      x: 0,
      y: 0,
    },
  };
  const bombElement1 = document.createElement('div');
  bombElement1.classList.add('sprite--bomb');
  bombElement1.dataset.entityId = 'bomb-1';
  document.body.append(bombElement1);
  const bombElement2 = document.createElement('div');
  bombElement2.classList.add('sprite--bomb');
  bombElement2.dataset.entityId = 'bomb-2';
  document.body.append(bombElement2);
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  renderEntities(state);
  expect(bombElement1.style.transform).toBe('translate(120px, 80px)');
  expect(bombElement2.style.transform).toBe('translate(200px, 160px)');
});
test('positions explosion cells using grid coordinates', () => {
  const state = {
    player: {
      x: 0,
      y: 0,
    },
    enemies: [],
    bombs: [],
    explosions: [
      {
        id: 'explosion-1',
        cells: [
          {
            row: 2,
            col: 3,
          },
          {
            row: 2,
            col: 4,
          },
        ],
      },
    ],
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  const explosionElement1 = document.createElement('div');
  explosionElement1.classList.add('sprite--explosion');
  const explosionElement2 = document.createElement('div');
  explosionElement2.classList.add('sprite--explosion');
  explosionElement1.dataset.entityId = 'explosion-1';
  explosionElement2.dataset.entityId = 'explosion-1';
  explosionElement1.dataset.cellIndex = '0';
  explosionElement2.dataset.cellIndex = '1';
  document.body.append(explosionElement1);
  document.body.append(explosionElement2);
  renderEntities(state);
  expect(explosionElement1.style.transform).toBe('translate(120px, 80px)');
  expect(explosionElement2.style.transform).toBe('translate(160px, 80px)');
});
test('positions the correct explosion cells by entity id', () => {
  const state = {
    explosions: [
      {
        id: 'explosion-1',
        cells: [
          {
            row: 2,
            col: 3,
          },
          {
            row: 2,
            col: 4,
          },
        ],
      },
      {
        id: 'explosion-2',
        cells: [
          {
            row: 5,
            col: 6,
          },
          {
            row: 5,
            col: 7,
          },
        ],
      },
    ],
    player: {
      x: 0,
      y: 0,
    },
    enemies: [],
    bombs: [],
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  const explosionElement1 = document.createElement('div');
  explosionElement1.classList.add('sprite--explosion');
  explosionElement1.dataset.entityId = 'explosion-1';
  explosionElement1.dataset.cellIndex = '0';
  const explosionElement2 = document.createElement('div');
  explosionElement2.classList.add('sprite--explosion');
  explosionElement2.dataset.entityId = 'explosion-1';
  explosionElement2.dataset.cellIndex = '1';
  document.body.append(explosionElement1);
  document.body.append(explosionElement2);
  const explosionElement3 = document.createElement('div');
  explosionElement3.classList.add('sprite--explosion');
  explosionElement3.dataset.entityId = 'explosion-2';
  explosionElement3.dataset.cellIndex = '0';
  const explosionElement4 = document.createElement('div');
  explosionElement4.classList.add('sprite--explosion');
  explosionElement4.dataset.entityId = 'explosion-2';
  explosionElement4.dataset.cellIndex = '1';
  document.body.append(explosionElement3);
  document.body.append(explosionElement4);
  renderEntities(state);
  expect(explosionElement1.style.transform).toBe('translate(120px, 80px)');
  expect(explosionElement2.style.transform).toBe('translate(160px, 80px)');
  expect(explosionElement3.style.transform).toBe('translate(240px, 200px)');
  expect(explosionElement4.style.transform).toBe('translate(280px, 200px)');
});
test('positions the entities without using top or left', () => {
  const state = {
    player: {
      x: 80,
      y: 120,
    },
    enemies: [
      {
        id: 'enemy-1',
        x: 160,
        y: 200,
      },
    ],
    bombs: [
      {
        id: 'bomb-1',
        col: 3,
        row: 2,
      },
    ],
    explosions: [
      {
        id: 'explosion-1',
        cells: [
          {
            row: 3,
            col: 4,
          },
          {
            row: 3,
            col: 5,
          },
        ],
      },
    ],
  };
  const playerElement = document.createElement('div');
  playerElement.classList.add('sprite--player');
  document.body.append(playerElement);
  const enemyElement = document.createElement('div');
  enemyElement.classList.add('sprite--enemy');
  enemyElement.dataset.entityId = 'enemy-1';
  document.body.append(enemyElement);
  const bombElement = document.createElement('div');
  bombElement.classList.add('sprite--bomb');
  bombElement.dataset.entityId = 'bomb-1';
  document.body.append(bombElement);
  const explosionElement1 = document.createElement('div');
  explosionElement1.classList.add('sprite--explosion');
  explosionElement1.dataset.entityId = 'explosion-1';
  explosionElement1.dataset.cellIndex = '0';
  const explosionElement2 = document.createElement('div');
  explosionElement2.classList.add('sprite--explosion');
  explosionElement2.dataset.entityId = 'explosion-1';
  explosionElement2.dataset.cellIndex = '1';
  document.body.append(explosionElement1);
  document.body.append(explosionElement2);
  renderEntities(state);
  expect(playerElement.style.top).toBe('');
  expect(playerElement.style.left).toBe('');
  expect(enemyElement.style.top).toBe('');
  expect(enemyElement.style.left).toBe('');
  expect(bombElement.style.top).toBe('');
  expect(bombElement.style.left).toBe('');
  expect(explosionElement1.style.top).toBe('');
  expect(explosionElement1.style.left).toBe('');
  expect(explosionElement2.style.top).toBe('');
  expect(explosionElement2.style.left).toBe('');
});
