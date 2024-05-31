//43Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one 
// array with the Great added to each magician’s name.

let Magicians :string[]= ["asjad", "aseef", "anamta"];
function copyarray(copyarr:string[]){
return[...Magicians];
}
function make_great(array:string[]){
    for(let i=0; i<array.length; i++){
        array[i] = array[i] + " the Great";
}
}

function show_magicians(magicians:string[]) {
    magicians.forEach(element => {          
     console.log(element)    
  }); 
   }
let a = copyarray(Magicians)
make_great(a)
console.log("Unchanged array")
show_magicians(Magicians)
console.log("Changed array")
show_magicians(a)


