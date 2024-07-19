let cars = ["audi", "bmw", "xuv", "maruti"];
cars.push("toyota"); //Array push method is used to add an element to the end of array 
console.log(cars);

cars.pop(); //Array pop method Delete the end element and return the array 
console.log(cars);

cars.unshift("Toyota"); //Array unshift method Add an element to the start of the array
console.log(cars);

cars.shift(); //Array Shift Method delete an element from the start and returns it 
console.log(cars);

//IndexOf : Returns the index of something 
console.log(cars.indexOf("bmw")); //Output : 1
console.log(cars.indexOf("xuv")); //output : 2
console.log(cars.indexOf("toyota")); //Output : -1

//includes : Tells the presence of an element in the array in boolean 
console.log(cars.includes("xuv")); //Output : True 
console.log(cars.includes("toyota")); //Output : False
