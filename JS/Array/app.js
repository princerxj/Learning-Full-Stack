//Slice Method in Array : Copies a portion of an array 
//Behave somewhat like the slice method in string with syntax (start,end)
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors.slice()); //Output : ['red', 'yellow', 'blue', 'orange', 'pink', 'white']
console.log(colors.slice(2)); //Output : ['blue', 'orange', 'pink', 'white']

//If passed negative value in the method, this means we want that number of elements from the end of the array 
console.log(colors.slice(-1)); //Output : ['white']
console.log(colors.slice(-2)); //Output : ['pink', 'white']