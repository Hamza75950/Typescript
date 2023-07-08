/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/ 

let magician_names = ["Maximus ","Seraphina","Zephyr"]

function show_magicians()
{

    for(let i = 0 ; i < magician_names.length;i++)
    {
        console.log(magician_names[i]);
    }
}

function make_grate()
{
    let great_magician = []
    for (let i =0 ; i<magician_names.length;i++)
    {
        great_magician.push(magician_names[i]+" The Grate");
    }
    return great_magician;
}
console.log(make_grate());
show_magicians();
/*
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function make_great(magicians) {
    let greatMagicians = [];
  
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(magicians[i] + " the Great");
    }
  
    return greatMagicians;
  }
  
  let magicianNames = ['Merlin', 'Mystica', 'Zephyr', 'Seraphina', 'Maximus'];
  
  let originalMagicians = [...magicianNames];
  let greatMagicians = make_great([...magicianNames]);
  
  console.log("Original Magicians:");
  show_magicians(originalMagicians);
  
  console.log("--------------------");
  
  console.log("Great Magicians:");
  show_magicians(greatMagicians);
  */