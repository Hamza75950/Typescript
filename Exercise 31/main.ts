/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/


let users = ["hamza","Umer","Umair","Danish"];
if (users.length==0)
{
    console.log("We need to find some user!");

}
else {
    console.log("Current Users:")
    for (let i =0 ; i<users.length;i++)
    {
        console.log(users[i]);
    }
}

users = []
if (users.length==0)
{
    console.log("\n We need to find some user!");

} 

