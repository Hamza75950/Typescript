/*45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
function carInformation(manufacturer, modelName, ...kwargs) {
    let car = {
      manufacturer: manufacturer,
      modelName: modelName
    };
  
    for (let i = 0; i < kwargs.length; i += 2) {
      let key = kwargs[i];
      let value = kwargs[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the function with required information and additional key-value pairs
  let car = carInformation("Toyota", "Camry", "color", "silver", "year", 2022, "optionalFeature", "sunroof");
  
  // Print the returned object to verify the stored information
  console.log(car);
  