// THIS IS THE CODE FROM THE PREVIOUS EXCERSICE!
let guests: string[]=["Anamta","Mumma","Baba"];

//console.log(`Hello ${guests[1]}, i would like to invite u to a party! Be sure to come!`);
//console.log(`Hello ${guests[2]}, i would like to invite u to a party! Be sure to come!`);

let a = guests.shift();
guests.unshift("Aseef");

//console.log(`Hello ${guests[0]}, i would like to invite u to a party! Be sure to come!`);

console.log(`${a} cant make it because she has an exam!\n`);

// THIS IS THE NEW CODE!

console.log('Good News! we have found a bigger table so we are invivting three new guests!\n');
guests.unshift('Sir Hamzah');
guests.splice(3,0,'Shayan');
guests.push('Sir Zia Khan');


for(let i=0; i<guests.length; i++){

console.log('Hello! ' + guests[i] + '\nI am inviting u to a programmers party!\n' + 'Your presence will be much appreciated!\n');

};