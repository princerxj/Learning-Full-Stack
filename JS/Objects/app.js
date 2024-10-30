/* Object Literals :
    Used to store keyed collections and complex entities.
    property => (key,value) pair
    Objects are a collection of properties
    For example : name = Prince , here name is the key and Prince is the value
*/
const student = {
    name : "Shradha",
    marks : 90,
    location : "Delhi",
    age : 23,
};

//Get Values 
/*We may either use student["name"] or student.name*/

console.log(student["name"]);
console.log(student.marks);