// Primitive

// 7 types : String, Number, Boolean, null, undefiend, symbol, Bigint

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;   

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 345678909876543n;

// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "Naagraj", "doga"];
let myObj =
{
    name: "sandhya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
// console.log(typeof bigNumber); //undefined
// console.log(typeof outsideTemp); //object
// console.log(typeof myFunction);//function
// console.log(typeof anotherId);//symbol

// console.log(typeof heros); //object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-Primitive)

let myGithubname = "Sheeny"

let anothername = myGithubname
anothername = "Sandhya"

console.log(myGithubname); 
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sheeny@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



