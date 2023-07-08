/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
var magician_names = ["Maximus ", "Seraphina", "Zephyr"];
function show_magicians() {
    for (var i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}
function make_grate() {
    for (var i = 0; i < magician_names.length; i++) {
        magician_names[i] = magician_names[i] + " The Grate";
    }
}
make_grate();
show_magicians();
