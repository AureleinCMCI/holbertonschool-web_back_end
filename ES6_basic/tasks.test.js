// tasks.test.js
import { taskFirst, getLast, taskNext } from './0-constants';

describe('Test des fonctions de tasks.js', () => {
  test('taskFirst retourne la bonne phrase', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  test('getLast retourne la bonne chaîne', () => {
    expect(getLast()).toBe(' is okay');
  });

  test('taskNext retourne la combinaison correcte', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
