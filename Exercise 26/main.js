/*26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
//program 1 run if block
let alien_colour = "green";
if (alien_colour == "green") {
    console.log("You just earned 5 points for shooting the alien.");
}
else if (alien_colour != "green") {
    console.log("You just earned 10 points.");
}
//program 2 runs else if block
let alien_color = "red";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien.");
}
else if (alien_color != "green") {
    console.log("You just earned 10 points.");
}
