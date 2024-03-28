// Primitive Datatype
// string, number, boolean, undefined, null, symbol, bigint

const score = 100;
const scoreValue = 100.1;
const isLoggedIn = true;
const outSideTemp = null;
let userName;

const id = Symbol("123");
const anotherId = Symbol("123");

const bigNumber = 123847383929374n;

// console.log(typeof (bigNumber));
// console.log(id === anotherId);

// Reference type (non-primitive type)
// array, function, object

const avengers = ["Iron-man", "Hulk", "Black Widow", "Captain America"];

const myInfo = {
  myName: "Sameed Siddiqui",
  myAge: 23,
  myEmail: "sameedsiddiqui9@gmail.com",
};
const myFunction = function () {
  console.log("Hi, Sameed");
};

// console.log( myFunction);

// console.log(typeof (avengers));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// Stack (Primitive, it gives you a copy), Heap (Non-Primitive)

let myYoutubeName = "sameedsiddiquidot.com";
let anotherName = myYoutubeName;
anotherName = "Chai aur Code";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "sameedsiddiqui9@gmail.com",
  id: 19347,
};

let userTwo = userOne;
userTwo.email = "a@gmail.com"
console.log(userTwo);
