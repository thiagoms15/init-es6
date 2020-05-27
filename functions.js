export function sum (a, b) {
  return a + b;
};

export function sumWithRest(...params) {
  return params.reduce((total, next) => total + next );
};