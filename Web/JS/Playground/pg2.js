// var hello = "Hello";
// console.log(hello);

// //Arrays
// const numbers = [42, 23, 44, 3, 234, 55, 67, 22, 93];
// const numbers2 = new Array(22, 3, 4, 3, 36, 77);

// let val;

// // Get array length
// console.log(numbers.length);

// val = Array.isArray(numbers);
// val = numbers[2];
// val = numbers[2] = 100;

// console.log(numbers);
// console.log(val);

const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sport"],
  address: {
    city: "Miami",
    state: "Florida",
  },
  getBirthYear: function () {
    return 2021 - this.age;
  },

  runThis: function runThat() {
    console.log("Hello World!");
  },
};

console.log(person.runThis());

let hello = function bbyee() {
  console.log("Hello");
};
console.log(hello());
// let val;

// val = person;

// console.log(val.getBirthYear());

// let key = prompt("What do you want?", "Name");

// console.log(val[`first${key}`]);

// let val;

// const today = new Date("9-10-1981 22:00:22:374");

// val = today.toString();

// // val = today.getMonth();
// val = today;
// today.setHours(12, 33);
// console.log(val);

// If and comp operators

// console.log((undefined && 0) ?? 3);

// Function Declaration
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// let age = prompt("How old are you?", 18);

// if (checkAge(age)) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

// console.log(checkAge);

//for each

let cars = ["Ford", "Chevy", "Honda", "Toyota"];

cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car} : ${array}`);
});

console.log(
  String(
    cars.filter((car) => {
      return car.length <= 4;
    })
  )
);
getSelection("Hello");
