// The reverse() method reverses the order of the elements in an array.
// The reverse() method OVERWRITES the original array.

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
const reversedPeople = people.slice().reverse(); //Copy of people used to not overwrite original array.
console.log('Reversed array (copy): ',reversedPeople);

console.log('Original array: ',people); //Original people array. 

