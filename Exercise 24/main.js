//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
/*• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
let string1 = 'Hello';
let string2 = 'World';
let number1 = 5;
let number2 = 10;
let array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Is string1 equal to 'Hello'? I predict true.");
console.log(string1 == 'Hello');
console.log("Is string2 not equal to 'Hello'? I predict true.");
console.log(string2 != 'Hello');
// Tests using the lowercase function
console.log("Is string1 in lowercase equal to 'hello'? I predict true.");
console.log(string1.toLowerCase() === 'hello');
console.log("Is string2 in lowercase not equal to 'world'? I predict false.");
console.log(string2.toLowerCase() !== 'world');
// Numerical tests
console.log("Is number1 greater than number2? I predict false.");
console.log(number1 > number2);
console.log("Is number2 less than or equal to number1? I predict false.");
console.log(number2 <= number1);
// Tests using "and" and "or" operators
console.log("Is string1 equal to 'Hello' and number1 equal to 5? I predict true.");
console.log(string1 == 'Hello' && number1 == 5);
console.log("Is string1 equal to 'Hello' or number2 equal to 15? I predict true.");
console.log(string1 == 'Hello' || number2 == 15);
// Test whether an item is in an array
console.log("Is 3 in the array? I predict true.");
console.log(array.includes(3));
// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict true.");
console.log(!array.includes(6));
