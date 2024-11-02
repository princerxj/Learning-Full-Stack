//this keyword is used to refer to an object which is executing the piece of code
const student = {
    name : "shradha",
    age : 23,
    eng : 89,
    maths : 98,
    phy : 97,
    getAvg() {
        let avg = (this.eng + this.maths + this.phy) / 3;
        console.log(`${this.name} got an average marks of ${avg}`);
    }
}

//Try and catch
console.log("Hello");
console.log("Hello");
try {
    console.log(a);
} catch {
    console.log("Caught an error ,a  is not defined");
}
console.log("Hello");
console.log("hello");

//Arrow Function 
const sum = (a,b) => {
    return a+b;
}

//Implicit return in arrow function 
const mul = (a,b) => (
    a*b
);

//setTimeout(function, timeout)
console.log("Hii there");

setTimeout(() => {
    console.log("Apna College");
},4000);

console.log("Welcome to " );