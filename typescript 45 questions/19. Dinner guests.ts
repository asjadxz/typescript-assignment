// THIS IS THE CODE FROM THE PREVIOUS EXCERSICE!
let guests: string[]=["Anamta","Mumma","Baba"];

//console.log(`Hello ${guests[1]}, i would like to invite u to a party! Be sure to come!`);
//console.log(`Hello ${guests[2]}, i would like to invite u to a party! Be sure to come!`);

// let a = guests.shift();
// guests.unshift("Aseef");

// //console.log(`Hello ${guests[0]}, i would like to invite u to a party! Be sure to come!`);

// console.log(`${a} cant make it because she has an exam!\n`);


// console.log('Good News! we have found a bigger table so we are invivting three new guests!\n');
guests.unshift('Sir Hamzah');
guests.splice(3,0,'Shayan');
guests.push('Sir Zia Khan');


//for(let i=0; i<guests.length; i++){
//console.log('Hello! ' + guests[i] + '\nI am inviting u to a programmers party!\n' + 'Your presence will be much appreciated!\n');
//};

//THIS IS THE NEW CODE

// console.log('I am sorry everyone !It is my utmost dissapointment to tell u that the dinner table wont arrive on time for the party!\nSo now there is enough space for only 2 guests!\n');

let b= guests.pop();
// console.log(`Im am terribly sorry ${b}, i wont be able to invite u :(`);

let c= guests.pop();
// console.log(`Im am terribly sorry ${c}, i wont be able to invite u :(`);

let d = guests.pop();
// console.log(`Im am terribly sorry ${d}, i wont be able to invite u :(`);

let e = guests.pop();
// console.log(`Im am terribly sorry ${e}, i wont be able to invite u :(\n`);

//console.log(`Dear ${guests[0]}, you are still invited!`);
//console.log(`Dear ${guests[1]}, your are still invited!`);

guests.splice(0,2);
//console.log(guests);

console.log("Total number of guests: " + guests.length);
