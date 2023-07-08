//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// upper case
let _name = "haMza";
let upper = _name.toUpperCase();
console.log(upper);
//lower case
let lower = _name.toLowerCase();
console.log(lower);
// title case
function titleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(titleCase(_name));
//_____________________________________XXX____________________________________________________________________
