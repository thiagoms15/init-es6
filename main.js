// WebPack
import { sum } from './functions';
import { sumWithRest } from './functions';

console.log(sum(1,2));

// REST

const arr = [1, 2, 3, 4];

const userDummy = {
  name: 'Paul',
  age: 23,
  company: 'TheCompany'
};

const [ a, b, ...c ] = arr;
const { name, ...othersElements } = userDummy;

console.log(name, othersElements);
console.log(a, b, c);
console.log(sumWithRest(1, 2, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

const secondUser = { ...userDummy, name: 'Steve' };

console.log(arr3);
console.log(secondUser);
