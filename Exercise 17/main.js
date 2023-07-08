//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest_list = ["Albert Enistine", "Stephen Hawking", "Elon Musk", "Allen Turing"];
//exercise 16
console.log("I just found a bigger dinnining table.");
//add person at the start of the list
guest_list.unshift("Leonardo Da Vinci");
//add person in the middek of the list
guest_list.splice(3, 0, "Robert Downey Jr");
// add parson at the end of the list
guest_list.push("Ada Luvlace");
for (let i = 0; i < guest_list.length; i++) {
    console.log(guest_list[i] + ", I cordially invite you to the dinner to be held at my residence from 7 pm onwards next Sunday");
}
//_________________________________________XXX________________________________________________________________
console.log("I can only invite two people for dinner because table didn't arrive yet");
guest_list.pop();
console.log("sorry i can’t invite them to dinner.");
guest_list.pop();
console.log("sorry i can’t invite them to dinner.");
guest_list.pop();
console.log("sorry i can’t invite them to dinner.");
guest_list.pop();
console.log("sorry i can’t invite them to dinner.");
guest_list.pop();
console.log("sorry i can’t invite them to dinner.");
for (let i = 0; i < guest_list.length; i++) {
    console.log(guest_list[i] + " Your are invited to dinner party");
}
// empty guest list
guest_list.pop();
guest_list.pop();
console.log(guest_list[0]);
//_____________________________________XXX____________________________________________________________________
