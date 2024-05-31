//45Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to make 
// sure all the information was stored correctly.

function cars(manufacturer:string,model:string,color?:string,price?:string){
    let carObject:{manufacturer:string, model:string,color?:string,price?:string} =
     {
        manufacturer:manufacturer,
        model:model,
    };
    if(color!== undefined)
        carObject.color=color;
        
        if(price!== undefined)
            carObject.price=price;
        return carObject
            
}
let a=cars("Porsche","911");
let b=cars("Toyota","Camry","Red","$20,000");
console.log(a);
console.log(b);

