console.log(window);

// single element

//const form = document.getElementById('todo-form');

// const form = document.querySelector('#todo-form');
// console.log(form);

//multiple element

// const items = document.querySelectorAll('.item');
// items.forEach((item) => {
//   console.log(item);
// });

// console.log(document.getElementsByClassName('item'));

// todos.lastElementChild.remove();
// todos.firstElementChild.textContent = 'hello';
// todos.lastElementChild.innerHTML = '<h1>Hello</h1>';



// 함수를 안에 놓을  때
// button.addEventListener('click', function(e) {
//   e.preventDefault();
// });


// 함수를 밖에 놓을 때

const todos = document.querySelector('#todo-list');
const button = document.querySelector('.submit');
const todoInput = document.querySelector('#todo-input');
const msg = document.querySelector('#msg');

button.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if(todoInput.value === '') {
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 2000);
    return;
  };
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(todoInput.value));
  li.classList.add('item');
  todos.appendChild(li);
  todoInput.value = '';
};