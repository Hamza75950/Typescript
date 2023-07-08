/*30. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/


//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

let fav_fruit = ["Mangoes","Banana","Pomegranate"]

//search apples in array
let foundApple = false;
for (let i = 0; i < fav_fruit.length; i++) {
  if (fav_fruit[i] === 'apple') {
    foundApple = true;
    break;
  }
}
if (foundApple) {
  console.log('I love apples!');
}
else{
    console.log("Apple is not my favorite fruit")
}


//search Mangoes in array
let foundMangoes = false;
for (let i = 0; i < fav_fruit.length; i++) {
  if (fav_fruit[i] === 'Mangoes') {
    foundMangoes = true;
    break;
  }
}
if (foundMangoes) {
  console.log('I love Mangoes!');
}
else{
    console.log("Mangoes is not my favorite fruit");
}


//_____________________________________XXX____________________________________________________________________


//• Make a array of your three favorite fruits and call it favorite_fruits.
for (let i=0; i<fav_fruit.length;i++)
{
    console.log(fav_fruit[i]+" is my favorite Fruit");

}

//_____________________________________XXX____________________________________________________________________


//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/


//search for mangoes
let foundMango = false;
for (let i = 0; i < fav_fruit.length; i++) {
  if (fav_fruit[i] === 'Mangoes') {
    foundMango = true;
    break;
  }
}
if (foundMango) {
  console.log('I really like mangoes!');
}
else{
    console.log("Mangoes is not my favorite fruit");
}


//search for apples
let foundapples = false;
for (let i = 0; i < fav_fruit.length; i++) {
  if (fav_fruit[i] === 'Apples') {
    foundapples = true;
    break;
  }
}
if (foundapples) {
  console.log('I really like Apples!');
}
else{
    console.log("Apples is not my favorite fruit");
}

//search for banana
let foundbanana = false;
for (let i = 0; i < fav_fruit.length; i++) {
  if (fav_fruit[i] === 'Banana') {
    foundbanana = true;
    break;
  }
}
if (foundbanana) {
  console.log('I really like Banana!');
}
else{
    console.log("Banana is not my favorite fruit");
}

//search for kiwi

let foundkiwi = false;
for (let i = 0; i < fav_fruit.length; i++) {
  if (fav_fruit[i] === 'Kiwi') {
    foundkiwi = true;
    break;
  }
}
if (foundkiwi) {
  console.log('I really like Kiwi!');
}
else{
    console.log("Kiwi is not my favorite fruit");
}

//search for Oranges

let foundorange = false;
for (let i = 0; i < fav_fruit.length; i++) {
  if (fav_fruit[i] === 'Oranges') {
    foundorange = true;
    break;
  }
}
if (foundorange) {
  console.log('I really like oranges!');
}
else{
    console.log("Oranges is not my favorite fruit");
}
