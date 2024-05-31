let guests: string[]=["Anamta","Mumma","Baba"];
console.log(`Hello ${guests[1]}, i would like to invite u to a party! Be sure to come!`);
console.log(`Hello ${guests[2]}, i would like to invite u to a party! Be sure to come!`);
let a = guests.shift();
guests.unshift("Aseef");
console.log(`Hello ${guests[0]}, i would like to invite u to a party! Be sure to come!`);
console.log(`${a} cant make it because she has an exam!`);


