
//Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once.
const personName:string = '     \n\txiao\t\n     ';

// Print the name once, so the whitespace around the name is displayed.
console.log(personName);

//Then print the name after striping the white spaces.
console.log(personName.trim());
