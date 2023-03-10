export const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export function sortLifes(arr) {
  arr.sort((prev, next) => next.health - prev.health);
  return arr;
}

const result = sortLifes(characters);

export default result;
