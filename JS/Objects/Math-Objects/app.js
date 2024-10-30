//Math Objects

//Properties : for example : Math.PI, Math.E; etc.

//Methods : Math.abs(n);  Math.pow(a,b); Math.floor(n); Math.ceil(n); Math.random(); etc.

console.log(Math.abs(-2.303));
console.log(Math.abs(9.3));

console.log(Math.pow(2,4));

console.log(Math.floor(5.4));
console.log(Math.floor(-3.2));

console.log(Math.ceil(9.202));
console.log(Math.ceil(-2.3));

console.log(Math.random());
console.log(Math.random()); //Math.random() generates numbers from 0 to 1 but never 1
console.log(Math.random());
console.log(Math.random());

//Generating Random Integer from 1 to 10 
let num = Math.random();
num *= 10;
num = Math.floor(num);
num += 1;
console.log(num);

//Generating Random Integer from 1 to 100
let num1 = Math.random();
num1 *= 100;
num1 = Math.floor(num1);
num1 += 1;
console.log(num1);

//Generating a random number between 1 and 5
let num2 = Math.random();
num2 *= 5;
num2 = Math.floor(num2);
num2 += 1;
console.log(num2);