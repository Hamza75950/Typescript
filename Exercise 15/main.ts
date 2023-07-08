//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guest_list = ["Albert Enistine", "Stephen Hawking", "Elon Musk","Allen Turing"];

console.log(guest_list[0]+ " can not make it to dinner");

//replacing albert enstine with niel degrass tyson
guest_list[0] = "Niel Degrass Tyson"

for (let i = 0 ; i< guest_list.length; i++ )
{
    console.log(guest_list[i] + ", I cordially invite you to the dinner to be held at my residence from 7 pm onwards next Sunday");
}
//_____________________________________XXX____________________________________________________________________
