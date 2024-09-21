const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ranjan-rkm')

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-10 , 2)
console.log(anotherString);

const newStringOne = "   ranjan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ranjan.com/ranjan%20mahato"

console.log(url.replace('%20' , '_'));

console.log(url.includes('ranjan'));

console.log(gameName.split('-'));
