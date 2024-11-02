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

//Function expression 
/*  Example : const variable = function(arg1, arg2 ....) {
                    //Do or return something 
              }
*/

const sum2 = function(a,b) {
    return a+b;
}
sum2(2,3);

//Higher order function : A func which that does one or both : 1.)takes one or more functions as args 2.)returns a function
function multipleGreet(func,count) {
    for(let i = 1; i <= count; i++) {
        func();
    }
}

let greeting = function() {
    console.log("Hello");
}

multipleGreet(greeting,2);

//Returns a function 
function oddEvenTest(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    } else if(request == "even") {
        let even = function(n) {
            console.log(n%2 == 0);
        }
        return even;
    } else {
        console.log("Wrong request");
    }
}
let request = "odd";