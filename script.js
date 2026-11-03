function greet(name) {
    return "Hello, " + name;
}

console.log(greet("emmanuel"));

function add(a, b) {
    return a + b;
}

console.log(add(10, 5));

function subtract(a, b) {
    return a - b;
}   

console.log(subtract(10, 5));

function multiply(a, b) {
    return a * b;
}   

console.log(multiply(10, 5));

function divide(a, b) {     
    return a / b;
}   

console.log(divide(10, 5));

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Omeiza", "Emmanuel"));

let x = 10;
let y = 5;

console.log( "Addition:", (x + y) );
console.log( "Subtraction:", (x - y) );
console.log( "Multiplication:", (x * y) );
console.log( "Division:", (x / y) );

let scores = 75;
if (scores >= 50) {
    console.log("pass");
} else {
    console.log("fail");
}

let age = 20;
if (age < 18) {
    console.log("You are a adult.");
} else {
    console.log("You are not a minor.");
}

let number = 7;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
