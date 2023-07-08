/*44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
function sandwichOrder() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    console.log("Bread: ", items.includes("bread") ? "Yes" : "No");
    console.log("Meat: ", items.includes("meat") ? "Yes" : "No");
    console.log("Cheese: ", items.includes("cheese") ? "Yes" : "No");
    console.log("Vegetables: ", items.includes("vegetables") ? "Yes" : "No");
    console.log("Sauces: ", items.includes("sauces") ? "Yes" : "No");
    console.log("--------------------");
}
// Call the function with different number of arguments
sandwichOrder("bread", "meat", "cheese", "vegetables", "sauces");
sandwichOrder("bread", "meat", "cheese");
sandwichOrder("bread", "vegetables", "sauces");
