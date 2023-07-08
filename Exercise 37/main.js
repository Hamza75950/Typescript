/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(size, text) {
    if (size === void 0) { size = "L"; }
    if (text === void 0) { text = "I love TypeScript."; }
    console.log("Size: " + size + " \nMessage: " + text + "");
}
//calling a function with default parameters
make_shirt();
//calling a function with different size and default message
make_shirt("M");
//calling a function with different parameters
make_shirt("S", "Coding......");
