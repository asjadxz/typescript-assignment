//store the locations in an array.Make sure the locations are not in alphabetical order
let places :string[]=["Hunza Valley","Niagra Falls","Eiffel Tower","Medina","Makkah"];

let a = places.slice();

//Print your array in its original order
console.log("Original:" + places + '\n');

//print your array in alphabetical order without modifying the actual list
console.log("In alphabetical order:" + a.sort() + '\n');

//Show that your array is still in its original form by printing it
console.log("Original:" + places + '\n');
 
//Print your array in reverse alphabetical order without changing the order of the orignal list
console.log("Reverse aplhabetical order:" + a.sort().reverse() + '\n');

//Reverse the order of your list.Print the array to show its order has changed
console.log("Reversed:" + a.reverse() + '\n');

//Reverse the order of your list again.Print the list to show its back to its orginal form
console.log("Reversed again:" + a.reverse() + '\n');

//Sort your array in aplhabetical  order.Print the array to show that its order has been changed
console.log("In Aplhabetical order:" + a.sort() + '\n');

//Sort your array so its stored in reverse aplhabetical order.Print the list to show that its order has been changed
console.log("Reverse aplhabetical order:" + a.sort().reverse());


