//Store a person’s name in a variable,
let personName : string = "aseef ali";
//and then print that person’s name in lowercase, uppercase, and titlecase.
let lowercase :string = personName.toLowerCase();
let uppercase :string = personName.toUpperCase();
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

console.log(`Hello ${personName}\n` + `Here is your name in:\n`+ `lowercase = ${lowercase}\n` + `uppercase = ${uppercase}\n` + `titlecase = ${titlecase}`);



 