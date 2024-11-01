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
