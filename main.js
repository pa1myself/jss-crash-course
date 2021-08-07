alert('Hello World');
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

let score;
score = 10;
console.log(score);

//String, Numbers, Boolean, null, undefined
const name ='john';
const age = 30;
const rating = 4.5;
const iscool = true;
const x = null;
const y = undefined;
let z;

console.log(iscool);

const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
fruits[3] = 'grapes';
fruits.push('mangoes');
console.log(numbers, fruits);

console.log(fruits[1]);
fruits.pop();
console.log(fruits.indexOf('oranges'));

//object

const person = {
    firstName: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }

  console.log(person)
  console.log(person.hobbies[1]);
  console.log(person.address.city);
  person.email = 'jdoe@gmail.com';
  console.log(person);

const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Meeting with boss',
      isCompleted: true
    },
    {
      id: 3,
      text: 'Dentist appt',
      isCompleted: false
    }
  ];
  console.log(todos);

console.log(todos[1].text);

//for
for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
  }

  // While
let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}


// ARRAY METHODS

// forEach() 
todos.forEach(function(todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
  });
  
  // map() 
  const todoText = todos.map(function(todo) {
    return todo.text;
  });
  
  console.log(todoText);
  
  // filter()
  const todo1 = todos.filter(function(todo) {
    return todo.id === 1; 
  });

  // If/Else Statement
const s = 30;

if(s === 10) {
  console.log('s is 10');
} else if(s > 10) {
  console.log('s is greater than 10');
} else {
  console.log('s is less than 10')
}

// Switch
color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:  
    console.log('color is not red or blue')
}

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//const ul = document.querySelector('.items');
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

 const btn = document.querySelector('.btn');
 btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
 })

 const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


const li = document.createElement('li');
li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
userList.appendChild(li);

nameInput.value = '';
 emailInput.value = '';