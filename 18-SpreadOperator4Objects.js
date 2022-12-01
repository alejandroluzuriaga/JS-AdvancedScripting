const animal = {
  name: "alpaca",
  legs: 4,
  food: {
    breakfast: "grass",
  },
};

const livingSpace = {
  place: "field",
  lifeSpan: 20,
};

//We'd normally do this:
const animalLegs = animal.legs;
//but there are best ways to do it.

//DESTRUCTURING:
const { legs } = animal; //Equal to animalLegs = animal.legs.

const { name, food } = animal; //--> Get name and food from animal.
const { breakfast } = food; // --> Get breakfast from food.

console.log(name, food, breakfast);
//------------------------------------------------------------------
//SREAD OPERATOR(...object/array): allows us to quickly copy all or part of an existing array or object into another array or object.

//Lets say we want to join 'livingSpace' object's attributes to 'animal' object's ones.

const completeAnimal = {
  ...animal,
  ...livingSpace,
};
console.log(completeAnimal);

//Lets assume that we want to create a function that recieving an object, one key
//and one value, creates a new object with all its original keys and adding
//parameter's key and value.

const addProperty = (object, key, value) => {
  const newObject = {
    ...object, //we get all object attributes (keys/values)
    [key]: value, //and we add the new one.
  };
  return newObject;
};
//Now, lets create a newObject with completeAnimal's attributes + one more we want.
//Lets add (key --> color and color = brown)

const newCompleteAnimal = addProperty(completeAnimal, "color", "brown");
console.log(completeAnimal); //not modified
console.log(newCompleteAnimal); //new object modified

//------------------------------------------------------------------
//REST OPERATOR (...rest)

//Lets say we want to create a new object with not every completeAnimal's attributes.
//I only want 'name', 'place' and 'lifeSpan'.

const { 
    legs: otherLegsname, //'legs' --> we dont want it
    food: otherFoodsname,//'food' --> we dont want it
    ...simpleAnimal} //get the rest of the attributes that are not 'legs' and 'food' of completeAnimal and assign it to 'simpleAnimal'
    = completeAnimal; 

    console.log(simpleAnimal) //we get a copy of completeAnimal without 'leg' and 'food' attributes.
