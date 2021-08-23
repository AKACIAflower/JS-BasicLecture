// Variable

var num = 3;
console.log(num);

var num = 10;
console.log(num);

let num1 = 5;
console.log(num1);

num1 = 20;
console.log(num1);

const num2 = 15;
console.log(num2);



// String

let str = `I'm "fine"`
console.log(str);


// Array

let arr = [1, 0, 'hi', '1'];
console.log(arr[3], arr[0]);


// Object

let student1 = {
  koreanScore : 90,
  englishScore : 70,
  mathScore : 80,
};

console.log(student1);

// 객체 내의 속성에 접근하는 방법 (2가지)

let student2 = {
  koreanScore : 90,
  englishScore : 70,
  mathScore : 80,
};

// 대괄호 연산자
console.log(student2["koreanScore"]);

//점(닷, 마침표) 연산자
console.log(student2.koreanScore);


// 함수 Function

// 함수 선언식 (끝에 세미콜론 없어도됨 )

function printHello() {
  console.log("Hello");
}

// 함수 표현식 ( 끝에 세미콜론 넣어줘야됨 )

const hello = function printYes() {
  console.log("Yes");
};

// 함수를 호출한다.

printHello();
hello();

// 인수와 매개변수

function printFruit(name, price) {
  console.log(name, price);
}

printFruit('Apple', 2000);
printFruit('Banana', 2500);

// return

function sum(num1, num2) {
  return num1 + num2;
}

const result = sum(10, 20);
console.log(result);


// Arrow Function (화살표 함수)

const hap = (num1, num2) => {
  return num1 + num2;
}

const result1 = hap(20, 20);
console.log(result1);

// 중괄호 안에 바로 return이 들어가면 간추릴수있음.

const hab = (num1, num2) => num1 + num2;


const result2 = hap(20, 20);
console.log(result2);


// 매개변수가 하나일 때

const gob = x => x * x;

const result3 = gob(10);
console.log(result3);

//매개변수가 없을 때

const pi = () => 3.14;

const result4 = pi();
console.log(result4);

// 객체일 때

const getObject = () => ({
    name : "철수",
    age : 20,
  });


const obj = getObject();
console.log(obj.name);

// switch문

switch (key) {
  case value1:
    //key가 value1 일 때 실행문
    break;
  case value2:
    //key가 value2 일 때 실행문
    break;
  default;
    break;
}