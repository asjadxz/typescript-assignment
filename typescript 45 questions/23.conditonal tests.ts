// 23.Conditional Tests: Write a series of conditional tests. Print a statement describing 
//each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car :string = "koenisegg";//setting variable

//TRUE CASE

//test no.1
 console.log("Is the car === koenisegg ? I predict true");//my prediction
 console.log(car === "koenisegg");//result

 //test no.2
 console.log("Is the car == koenisegg ? I predict true");//my prediction
 console.log(car == "koenisegg");//result
 
//test no.3 
console.log("Is the car !=  toyota ? I predict true");//my prediction
console.log(car != "toyota");//result

//test no.4
console.log("Is the car !== honda ? I predict true");//my prediction
console.log(car !== "honda");//result

//test no.5
console.log("Is the car.upper case === KOENISEGG ? I predict true");//my prediction
console.log(car.toUpperCase() === "KOENISEGG");//result


//FALSE CASE

//test no.1
console.log("Is the car != koenisegg ? I predict false");//my prediction
console.log(car != "koenisegg");//result

//test no.2
console.log("Is the car !== koenisegg ? I predict false");//my prediction
console.log(car !== "koenisegg");//result

//test no.3
console.log("Is the car == toyota ? I predict false");//my prediction
console.log(car == "toyota");//result

//test no.4
console.log("Is the car === porsche ? I predict false");//my prediction
console.log(car === "porsche");//result

//test no.5
console.log("Is the car[0] == n ? I predict false");//my prediction
console.log(car[0] == "n");//result


