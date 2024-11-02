//Syntax : 
/* 
    function definition : 
    function funcName() {
        //do something
    }
    Function calling : 
    funcname();
*/
function hello() {
    console.log("Hello");
}

function greet() {
    let name = prompt('Enter your name  : ');
    console.log(`Hello ${name}`);
}

function printTable() {
    let n = prompt("Enter a number to print table : ");
    for(let i = 1; i < 11; i++) {
        console.log(`${n} X ${i} = ${n*i}`);
    }
}

function rolldice() {
    let num = Math.random();
    num *= 6;
    num = Math.floor(num) + 1;
    console.log(num);
}

//Functions with arguments 
/*  Syntax : 
    function funcName(arg1, arg2 , ....) {
        //do something
    }
*/
function sum(a, b) {
    console.log(a+b);
}
sum(9,23);

function average(a, b, c) {
    let sum = a + b + c;
    console.log(`Average is : ${sum / 3}`);
}

function printTable(n) {
    for(let i = 1; i  < 11; i++) {
        console.log(`${n} X ${i} = ${n*i}`);
    }
}

//return keyword is used to use some value from the function
/* function funcName(arg1, arg2, ...) {
        //do something 
        return value ;
    }
*/

//Scope : determines the accesibilty of variables, objects and functions from different parts 
//Of three types : Function, Block , Lexical
