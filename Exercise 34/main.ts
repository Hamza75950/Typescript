/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

let Pizzas = ["Chicken Tikka Pizza","Herbareno Pizza","Cheeze Pizza"]
for (let i = 0 ; i<Pizzas.length;i++){
    console.log(Pizzas[i]);
}
//modified for loop print line about pizza
for (let i = 0 ; i<Pizzas.length;i++)
{
    console.log("I Like " + Pizzas[i])
}

console.log("\n 1. Chicken tikka pizza is one of my absolute favorites due to its delicious blend of flavors and spices.\n\n 2. The combination of tender chicken tikka, tangy tomato sauce, and melted cheese on a crispy pizza crust is simply irresistible to me.\n\n 3. Whenever I crave a satisfying and savory meal, my go-to choice is undoubtedly a mouthwatering chicken tikka pizza.\n\n I really love pizza!")