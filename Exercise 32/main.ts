/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users = ["Hamza", "Umer","Badar","Ahsan","Umair"]
let new_users = ["Hamza","Shakeel","Adil","Umer","Muneeb"]

for (let i = 0 ; i< new_users.length;i++)
{
    let userExist = false
    let newuserLowercase = new_users[i].toLowerCase();
    for (let j = 0 ; j<current_users.length;j++)
    {
        if (current_users[j].toLowerCase()==newuserLowercase){
            userExist=true;
            break
        }
    }

if (userExist)
{
    console.log(new_users[i]+ " is already exist please choose a different user name.")
}
else {
    console.log("Username "+new_users[i] +" is avalable.")
}
}
