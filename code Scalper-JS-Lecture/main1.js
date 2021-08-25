// Variable, String

const name = "June Lee";
const age = 35;
const hobby = 'soccer,baseball,game';

console.log(name.substring(0, 4).toUpperCase());
console.log(name.split(""));
console.log(name.split(" "));
console.log(hobby.split(","));
console.log(hobby.split(",")[1]);

// Array

const animal = ["lion", "bear", "monkey"];
console.log(animal[1]);

animal[3] = "dear";
console.log(animal);

// 배열안에 인덱스 추가

animal.push("tiger");
console.log(animal);

animal.unshift("hippo");
console.log(animal);

// 배열안에 인덱스 삭제

animal.pop();
console.log(animal);

animal.splice(1, 1);
console.log(animal);

const hippoIndex = animal.indexOf("hippo");
animal.splice(hippoIndex, 1);
console.log(animal);

// 배열인지 아닌지

console.log(Array.isArray(animal));

// 배열안에 몇번째 인덱스인지

console.log(animal.indexOf("bear"));

// Object

const monkey = {
  name : "ringo",
  face : "funny",
  age : 10,
  food : ["banana", "apple"],
  tail : true,
  location : {
      country : "Congo",
      place : "forest",
      isAfrica : true,
  }
}

console.log(monkey.face);
console.log(monkey.food[1]);
console.log(monkey.location.place);

monkey.name = "star";
console.log(monkey.name);

monkey.food[1] = "pear";
console.log(monkey.food);

monkey.weight = 50;
console.log(monkey);

// JSON

const monkeyJSON = JSON.stringify(monkey);
console.log(monkeyJSON);

const monkeyJSONParse = JSON.parse(monkeyJSON);
console.log(monkeyJSONParse);
console.log(monkeyJSONParse.name);


console.log(monkeyJSON.name);