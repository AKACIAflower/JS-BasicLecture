// 배열의 반복문

const animals = [{
    name: 'lion',
    size: 'big',
    isAggressive: true,
    weight: 200
  },
  {
    name: 'monkey',
    size: 'medium',
    isAggressive: true,
    weight: 30
  },
  {
    name: 'cat',
    size: 'small',
    isAggressive: false,
    weight: 10
  },
  {
    name: 'rat',
    size: 'small',
    isAggressive: false,
    weight: 2
  },
];

// for문

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i].name);
}

for (let animal of animals) {
  console.log(animal.name);
}

// while문

let i = 0;
while (i < animals.length) {
  console.log(animals[i].name);
  i++
}

// forEach

animals.forEach(function (animal, index) {
  console.log(animal.size);
  console.log(index);
});

// map -> 배열을 다른 형태의 배열로 재생산할 때 사용

const animalNames = animals.map(function (animal) {
  return `This is ${animal.name}, it's size is ${animal.size}`;
});

console.log(animalNames);

// filter -> 이 배열안에서 특정 조건을 가진 아이템들만 뽑아내는 반복문
// -> 데이터를 불러와서 JS로 데이터 테이블을 만들어 놓고 실시간검색할때 사용해서 걸러냄
// -> input창이 있고 테이블들이 있을때 input창에 small이라고 치면 filter된 데이터만 테이블에 띄우게 됨.

const smallAnimals = animals.filter(function (item) {
  return item.size === 'small';
});

console.log(smallAnimals);

// reduce -> 다양하게 활용가능, 배열안의 값들의 합을 구할때 사용

const numbers = [1, 10, 11, 23, 444];
const total = numbers.reduce(function (acc, cur) {
  console.log(acc, cur);
  return acc + cur;
});

console.log(total);

const totalWeight = animals.reduce(function (acc, cur) {
  return acc + cur.weight;
}, 0);

console.log(totalWeight);

// 삼항 연산자

const animal = 'lion';

const food = animal === 'lion' ? 'meet' : 'apple';

console.log(food);

// switch문

const ani = 'cat';

switch (ani) {
  case 'lion':
    console.log('animal is lion');
    break;
  case 'monkey':
    console.log('animal is monkey');
    break;
  default:
    console.log('animal is unknown');
    break;
}

// Function

function add1(a, b) {
  return a + b;
};

const sum1 = add1(10, 20);

console.log(sum1);

// ES6 함수 기본값 지정

function minus(a = 2, b = 1) {
  return a - b;
};

const sum2 = minus();

console.log(sum2);

// Arrow Function

const add2 = (a, b) => {
  return a + b;
};

console.log(add2(10, 25));

const add3 = (a = 1, b = 1) => {
  return a + b;
};

console.log(add3());

const add4 = (a = 1, b = 3) => a + b;

console.log(add4());

const add5 = (a, b) => a + b;

console.log(add5(15, 10));

