//var, let, const
//AR - Function Scoped or Global Scoped
var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// letters, numbers, _, $
// Can not start with number

// Multi word vars
var firstName = "John"; // Camel case
var first_name = "Sara"; // Underscore
var FirstName = "Tom"; // Pascal case
var firstname;

// LET - Block Scoped
let name;
name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

// CONST - Cannot be reassigned
const name = "John";
console.log(name);
//Can not reassign
name = "Sara";
//Have to assign a value
const greeting;

const person = {
  name: "John",
  age: 30,
};

person.name = "Sara";
person.age = 32;

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);

// DATA TYPES IN JS

// PRIMITIVE

// String
const name = "John Doe";
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ["movies", "music"];
// Object literal
const address = {
  city: "Boston",
  state: "MA",
};
const today = new Date();
console.log(today);
console.log(typeof today);

// TYPE CONVERSION

let val;

// Number to string
val = String(555);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([1, 2, 3]);

val = parseInt("100.30");
val = parseFloat("100.30");

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

// NUMBERS AND THE MATH OBJECT

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);

// STRING METHODS AND CONCATENATION

const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design,web development,programming";

let val;

val = firstName + lastName; // O/P: "WilliamJohnson"

// Concatenation
val = firstName + " " + lastName; // O/P: "William Johnson"

// Append
val = "Brad ";
val += "Traversy"; // O/P: "Brad Traversy"

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping Characters
val = "That's awesome, I can't wait"; // O/P: "That's awesome, I can't wait" Notice that even though there are single quotes inside the double quotes, js treats them as characters
//Conversely this can also be written as val='That"s Awesome, I can"t wait' and this time double-quotes will be treated as characters

// Length
val = firstName.length; // O/P: 7

// concat()
val = firstName.concat(" ", lastName); // O/P: "William Johnson"

// Change case
val = firstName.toUpperCase(); // O/P: "WILLIAM"
val = firstName.toLowerCase(); // O/P: "william"

val = firstName[2]; // O/P: "l"

// indexOf()
val = firstName.indexOf("l"); // O/P: 2
val = firstName.lastIndexOf("l"); // O/P: 3

// charAt()
val = firstName.charAt("2"); // O/P: "l"

// substring()
val = firstName.substring(0, 4); // O/P: Will

// slice()
val = firstName.slice(0, 4); //
val = firstName.slice(-3);

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Brad", "Jack");

// includes()
val = str.includes("foo");

console.log(val);

// TEMPLATE LITERALS

const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

// Without template strings (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  " </li><li>Job: " +
  job +
  " </li><li>City: " +
  city +
  " </li></ul>";

html =
  "<ul>" +
  "<li>Name: " +
  name +
  "</li>" +
  "<li>Age: " +
  age +
  "</li>" +
  "<li>Job: " +
  job +
  "</li>" +
  "<li>City: " +
  city +
  "</li>" +
  "</ul>";

function hello() {
  return "hello";
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li>
  </ul>
`;

document.body.innerHTML = html;

// ARRAY & ARRAY METHODS

// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);

// OBJECT LITERALS

const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 36,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 2017 - this.age;
  },
};

let val;

val = person;
// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// DATES AND TIMES

let val;

const today = new Date();
let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

// IF STATEMENTS & COMPARISON OPERATORS

// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // EQUAL TO
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
// if(id <= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

const color = "yellow";

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = "Steve";
const age = 70;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? "CORRECT" : "INCORRECT");

// WITHOUT BRACES
if (id === 100) console.log("CORRECT");
else console.log("INCORRECT");

if (id === 100) console.log("CORRECT");
else console.log("INCORRECT");

// SWITCHES

const color = "yellow";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(`Today is ${day}`);

// FUNCTION DECLARATIONS & EXPRESSIONS

// FUNCTION DECLARATIONS

function greet(firstName = "John", lastName = "Doe") {
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return "Hello " + firstName + " " + lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function (x = 3) {
  return x * x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Brad');

// PROPERTY METHODS

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo...");
};

todo.add();
todo.edit(22);
todo.delete();

// GENERAL LOOPS

// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number '+ i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users  = [
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

// A LOOK AT THE WINDOW OBJECT

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);

// BLOCK SCOPE WITH LET & CONST

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

console.log("Global Scope: ", a, b, c);
