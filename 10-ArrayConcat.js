// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.
// The concat() returned array allows repetitions.

const animals = ['🐶', '🐱', '🦍', '🐥', '🦍'];
const newAnimals = ['🐲', '🐠', '🦃', '🦇'];

const finalAnimals = animals.concat(newAnimals);
console.log(finalAnimals);

const batchOfAnimals = [ //Array of arrays.
    ['🐦','🐮'],
    ['🦏','🕷'],
    ['🕊','🐴'],
]

const fullAnimalList = batchOfAnimals.flat();   //Converts every array's attribute to an element, 
                                                //and pushes them into array fullAnimalList.
console.log(fullAnimalList)

const bestSolution = animals.concat(batchOfAnimals.flat());
console.log(bestSolution)