//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want 
//to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let s :string
let n :number

//Tests for equality and inequality with strings
console.log("Test for equality:" , "car"==="car");
console.log("Test for inequality:" , ("car"as string) !== "bike");

//Tests using the lower case function
s = "HELLO"
console.log("Test for lower case:" , s.toLowerCase() === "hello");//for true condition
console.log("Test for lower case:" , s.toLowerCase() !== "hello");//for false condition

//Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to

console.log("Test for equality:" , 9 === 9)
console.log("Test for inequality:" , ( 9 as number) !== 10)
console.log("Test for greater than:" , 10 > 9)
console.log("Test for less than:" , 9 < 10)
console.log("Test for greater than or equal to:" , 10 >= 10)
console.log("Test for less than or equal to:" , 9 <= 10)

//Tests using "and" and "or" operators
n = 10
console.log("Test for AND operator:" , n > 5 && n < 15)
console.log("Test for OR operator:" , n > 5 || n < 5)

//Test whether an item is in a array
let fruits :string[] = ["apple", "banana", "orange"]
console.log("Test whether 'apple' is in the array" , fruits.includes("apple"));

//Test whether an item is not in a array
let Names :string[]= ["ali","sana","aseef"]
console.log("Test whether 'ahmed' is not in the array" , Names.includes('ahmed'));



