//Method Chaining
//Using one method after another. Order of execution will be left to right
let msg = "   hello   ";
// let newmsg = msg.trim();
// console.log("After trim : ",newmsg);
// newmsg = newmsg.toUpperCase();
// console.log("After Upper case : ",newmsg);

let newMsg = msg.toUpperCase().trim();
console.log(newMsg); 