//Array References 
//References means Address in Memory 

let arr = ['a','b','c'];
let arrcopy = arr;
console.log(arr == arrcopy) ;
arr.push('d');
console.log(arr);
console.log(arrcopy);