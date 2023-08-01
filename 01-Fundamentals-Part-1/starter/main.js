// alert("Hello world")
// VALUES AND VARIABLES
// alert("Ayo")
// alert(1 + 1)
// console.log("Ayo");
// console.log(5 * 8);
// console.log("Ciroma");
// let firstName = "Seyi";
// let lastName = "Owoeye"
// let myFirstJob = "Programmer"
// let myCurrentJob = "Teacher"
// console.log(firstName);
// CONVENTIONS AND RULES TO NAMING VARIABLES
// camelCasing
// variable name should not start with a number
// let 1stJob = "Programmer"
// numbers, alphabets, underscore, dollar sign
// let myFirstName1_$ = "Ayo"
// no reserved key words

// DATA TYPES
// 1)primitive
// a)Number
// console.log(typeof 5);
// console.log(typeof 20.54)
// b)string
// console.log(typeof "Ciroma");

// console.log("Ciroma");
// c)Boolean
// const firstName = "Ayo"
// console.log(firstname);
// console.log(typeof true);
// console.log(false);

// d) undefined
// let age;
// console.log(age);
// console.log(typeof undefined);

// e) Null
// console.log(typeof null);

// f) symbol

// g) BigInt
// dynamically typed
// let age = 20;
// console.log(typeof age);
// age = "Ayo"
// console.log(typeof age);

// LET CONST VAR
// let age = 20;
// const firstName = "Ayo"
// var lastName = "Adekunle"
// let firstName = "Ayo"
// let and const - 2015
// var firstName =
// let age = 50;
// console.log(age);
// age = 51
// console.log(age);
// // let firstName = "Ayo";
// // firstName = "Seyi"

// let lastName = "Kate";
// lastName  = "George"
// let accountBalance;
// console.log(accountBalance);
// const
// const birthYear = 2000;
// birthYear = 2001
// const accountBalance;

// var
// var age = 20;
// console.log(age);
// age = 21
// console.log(age);

// firstName = "Ciroma"
// console.log(firstName);

// BASIC OPERATORS
// console.log(2 + 2);
// Mathematical operators
// + - * /
// const ageDumebi = 2023 - 2000;
// console.log(ageDumebi);
// console.log(5 + 10);
// console.log(5 * 10);
// console.log(5 / 10);
// exponentiation
// console.log(5**3);
// modulus
// console.log(5 % 2);
// let x = 5
// console.log(5 * "Ciroma");
// console.log("floating" + "berries");
// comparison operators
// console.log(5 < 6);//true
// console.log(5 > 6);
// console.log(5 <= 6);
// console.log(5 >= 6);
// console.log(5 === 6);
// console.log(5 == 6);
// = - assignment op
// == - loose eq op
// === - strict eq op
// Assignment operator and Augmented assignment operator
// let x = 10;
// console.log(x);
// x  /= 5;
// console.log(x);

// Operator precedence
// console.log(5 * 4 - 10);
// const weightAyo = 75;
// const heightAyo = 1.85;

// const BMI = weightAyo / (heightAyo * heightAyo)
// console.log(BMI);

//TEMPLATE LITERALS
let balance = 0;
let newBalance = 10;
// console.log(
//   "I woke up with " +
//     balance +
//     " and some body gave me money and my new balance is " +
//     newBalance
// );

// console.log(
//   `I woke up with ${balance} and someone gave me some money, now my new balance is ${newBalance}`
// );
// console.log(typeof "I am \ngoing home");
// console.log(typeof `I am
// going home`);

// taking decisions if/else statments
const ageCiroma = 20;
if (ageCiroma >= 18) {
  console.log(`Come and have your license`);
} else {
  console.log(`Wait for ${18 - ageCiroma} years`);
}

// console.log(1 - "0");