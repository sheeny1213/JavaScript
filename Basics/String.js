const name ="Sandhya"
const repoCount = 20

console.log(`Hello my name is ${name} and repoCount is ${repoCount}`);

const gameName = new String('sandhya')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   sandhya   "
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://sandhya%99raj.com"

console.log(url.replace('%99', '_'));

console.log(url.includes('chiya'));
console.log(url.includes('sandhya'));







