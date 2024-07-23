//Splice method in Array Methods 
//Splice : removes/replaces/add elements in place 
// splice(start,deleteCount,item0........itemN)
//Change happens in original array 

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.splice(4)); //Output : ['pink', 'white'] : elements till index 3 will be removed 
console.log(colors); //Output : ['red', 'yellow', 'blue', 'orange']
console.log(colors.splice(0,1)); //Output : ['red']
console.log(colors); //Output : ['yellow', 'blue', 'orange]
colors.splice(0,1,"Magenta", "Grey");
console.log(colors);