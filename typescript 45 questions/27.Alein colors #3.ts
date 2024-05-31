// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let aleincolor :string = "green"


//version 1
// If the alien is green, print a message that the player earned 5 points.
if (aleincolor == "green"){
    console.log("You earned 5 points for the green alien.");
// • If the alien is yellow, print a message that the player earned 10 points.
} else if (aleincolor == "yellow"){
    console.log("You earned 10 points for the yellow alien.");
// • If the alien is red, print a message that the player earned 15 points.
}else if (aleincolor == "red"){
    console.log("You earned 15 points for the red alien.");
} 


//version 2
aleincolor  = "yellow"
// If the alien is green, print a message that the player earned 5 points.
if (aleincolor == "green"){
    console.log("You earned 5 points for the green alien.");
// • If the alien is yellow, print a message that the player earned 10 points.
} else if (aleincolor == "yellow"){
    console.log("You earned 10 points for the yellow alien.");
// • If the alien is red, print a message that the player earned 15 points.
}else if (aleincolor == "red"){
    console.log("You earned 15 points for the red alien.");
}


//version 3
aleincolor = "red"
// If the alien is green, print a message that the player earned 5 points.
if (aleincolor == "green"){
    console.log("You earned 5 points for the green alien.");
// • If the alien is yellow, print a message that the player earned 10 points.
} else if (aleincolor == "yellow"){
    console.log("You earned 10 points for the yellow alien.");
    // • If the alien is red, print a message that the player earned 15 points.
}else if (aleincolor == "red"){
    console.log("You earned 15 points for the red alien.");
}
