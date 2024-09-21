// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 23957935720530n

// Reference (Non primitive)

// Arrey , Objects , Functions

const heros = ["Shaktiman" , "naagraj" , "doga"];
let myObj = {
    name : "ranjan",
    age : 21,
}

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof bigNumber);

console.log(typeof outsideTemp);

console.log(typeof myFunction);



// ***********************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com"
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

