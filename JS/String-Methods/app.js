//Slice
//Returns a part of the original string as a new String
/* Syntax : 
1.)str.slice(start,end); Ending index is excluded 
2.)Another method is to just pass the start value , in that 
case end will be assumed as str.length
3.)str.slice(-num) will be processed as atr.slice(str.length - num)

*/
let str = "ilovecoding";
console.log(str.slice(1,5)); //Output : love
console.log(str.slice(5)); //Output : Coding
console.log(str.slice(-2)); //Will be processed as 11-2 = 9 i.e str.slice(9) so output will be "ng"
