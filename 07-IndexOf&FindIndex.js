// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.

                                            //indexOf()

const animals = ['🐶', '🐱', '🦍', '🐥', '🦍'];

const indexOfBull = animals.indexOf(('🦍'));
    console.log(`Gorilla's index is: ${indexOfBull}`);

const numbers = [1, 2, 3, 4];

const indexOfNumber = numbers.indexOf((4)) //Numbers are turned into Strings first. Then compares.
    console.log(`4's index is: ${indexOfNumber}`);

const lastIndex = animals.lastIndexOf(('🦍'));
    console.log(`last gorilla found is on index: ${lastIndex}`);

// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the FIRST element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.

                                            //indexOf()

const people = [
    {name: 'A', age: 11},
    {name: 'B', age: 22},

    {name: 'C', age: 48}, //This is the one that findIndex() is returning.
    
    {name: 'C', age: 42},
    {name: 'C', age: 33},
    {name: 'D', age: 44},
    {name: 'C', age: 39},
    {name: 'C', age: 45},
    {name: 'D', age: 44},
]

const index = people.findIndex((person) =>{
    return (person.name === 'C' && person.age >= 45 && person.age <= 50);
})

    console.log(`first person found is on index: ${index}`)
    console.log('first person is:', people[index])