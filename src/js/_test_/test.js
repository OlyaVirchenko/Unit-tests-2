import { sortLifes, characters } from '../app';

sortLifes(characters);

const expectedObj = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('Проверка работы функции сортировки', () => {
  const result = sortLifes(characters);
  expect(result).toEqual(expectedObj);
});
