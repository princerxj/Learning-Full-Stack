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

//Get Values  : JS automatically converts object keys to Strings 
/*We may either use student["name"] or student.name*/

console.log(student["name"]);
console.log(student.marks);

//Add/update value
/*
    Task : Change the city to Mumbai 
           Add a new property , gender : "Female"
           Change the marks to "A"
*/
student.city = "Mumbai";
student.gender = "Female";
student.marks = "A";
//Deletion of a key 
delete student.marks;

//Object of Objects
// Storing infos of multiple students 
const classInfo = {
    Aman : {
        grade : "A",
        city : "Pune",
    },
    Rahul : {
        grade : "B",
        city : "Delhi",
    },
    Roshan : {
        grade : "A+",
        city : "Patna",
    },
}

//Array of Objects : Storing objects inside an array 
const classInfo2 = [
    {
        name : "Aman",
        grade : "C",
        city : "Patna",
    },
    {
        name : "Rahul",
        grade : "D",
        city : "Agra",
    },
    {
        name : "Prince",
        grade : "E",
        city : "Delhi",
    }
]