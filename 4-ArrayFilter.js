//The filter() method creates a copy of a portion of a given array,
//filtered down to just the elements from the given array that pass the test
//implemented by the provided function. Return values should be truthy o falsy values.

const animals = ["🐼", "🐥", "🐮", "🐯"]; //Cow and panda dont eat flesh.
const objectAnimals = [
  { icon: "🐼", herb: true },
  { icon: "🐥", herb: false },
  { icon: "🐮", herb: true },
  { icon: "🐯", herb: false },
];
//Example for 'animals' array.

// const herbAnimals = animals.filter((animal)=>{
//         return (animal.herb === '🐼' || animal === '🐮');
//     });

//Example for 'objectAnimals' array.
const herbAnimals = objectAnimals.filter((animal) => {  //Returns new array with elements that have attribute 'herb' === true;
  return animal.herb;
});

const herbAnimalIcons = herbAnimals.map((animal) => { //Returns new array with the icons of every element of 'herbAnimals' array.
  return animal.icon;
});

console.log(`Herbivorous animals are ${herbAnimalIcons}`);

//Its possible to concatenate methods between arrays like this:

const concatenateHerbAnimals = objectAnimals
    .filter((animal) => {
    return animal.herb;
    })
    .map((animal) => {
        return animal.icon;
    });

    console.log(concatenateHerbAnimals) //concatenateHerbAnimals has the same elements as herbAnimalIcons.
