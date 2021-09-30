import './sass/index.scss';

const test = {
  name: 'john',
  number: 2,
};

const test2 = {
  ...test,
  color: 'red',
};

console.log(test);
console.log(test2);
