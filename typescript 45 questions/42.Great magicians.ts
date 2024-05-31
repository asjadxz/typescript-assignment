//Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified.

let Magicians :string[]= ["asjad", "aseef", "anamta"];
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

make_great(Magicians)
show_magicians(Magicians)
