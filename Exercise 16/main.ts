//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest_list = ["Albert Enistine", "Stephen Hawking", "Elon Musk","Allen Turing"]

//exercise 15
console.log(guest_list[0]+ " can not make it to dinner");

//replacing albert enstine with niel degrass tyson
guest_list[0] = "Niel Degrass Tyson"

for (let i = 0 ; i< guest_list.length; i++ )
{
    console.log(guest_list[i] + ", I cordially invite you to the dinner to be held at my residence from 7 pm onwards next Sunday");
}

console.log("I just found a bigger dinnining table.");
//add person at the start of the list
guest_list.unshift("Leonardo Da Vinci");
//add person in the middek of the list
guest_list.splice(3,0,"Robert Downey Jr");
// add parson at the end of the list
guest_list.push("Ada Luvlace");

for (let i = 0 ; i< guest_list.length; i++ )
{
    console.log(guest_list[i] + ", I cordially invite you to the dinner to be held at my residence from 7 pm onwards next Sunday");
}

//_____________________________________XXX____________________________________________________________________