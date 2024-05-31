//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.







function make_shirt(text:string="I love Typescript",size:string="Large"){
    console.log(`The shirt is ${size} and it says "${text}"`);
}
make_shirt()

make_shirt("I love Typescript","Medium");

make_shirt("Lament","XL");
