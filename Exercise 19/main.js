//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//exercise 16 
let guest_list = ["Albert Enistine", "Stephen Hawking", "Elon Musk", "Allen Turing"];
//exercise 15
console.log(guest_list[0] + " can not make it to dinner");
//replacing albert enstine with niel degrass tyson
guest_list[0] = "Niel Degrass Tyson";
for (let i = 0; i < guest_list.length; i++) {
    console.log(guest_list[i] + ", I cordially invite you to the dinner to be held at my residence from 7 pm onwards next Sunday");
}
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
//print a message indicating the number of people you are inviting to dinner.
console.log(guest_list.length + " people are invited to dinner.");
