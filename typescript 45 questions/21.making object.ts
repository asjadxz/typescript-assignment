//They think of something you could store in a TypeScript Object. 
interface computer {
    cpu : string,
    gpu : string,
    ram : string,

};

let computer:computer ={
    cpu : "ryzen 7",
    gpu : "RTX 4090",
    ram : "64 gb ddr5"
} ;
console.log(computer);

// Write a program that creates Objects containing these items.

interface car {
    company : string,
    model: string,
    launch_date : number,
    automatic : boolean,

};

let car:car={
    company : "toyota",
    model : "supra mk 4",
    launch_date : 1978,
    automatic : false
} ;
console.log(car);
 

