// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
                                                                //find()
const fridgeFood = [
    { food: '🍜', id: '1'}, 
    { food:'🍔' , id: '2'}, 
    { food:'🥒' , id: '3'}, 
    { food:'🍗' , id: '4'},  
    { food:'🍗' , id: '5'}];

const chicken = fridgeFood.find((item, index)=>{
    if (item.food === '🍗'){
    return true};
})
console.log(fridgeFood)
console.log(chicken)

// -----------------------------------------------------------------
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.
                                                                //some()

const people = [
    {name: 'A', age: 11},
    {name: 'B' , age:22},
    {name: 'C', age: 33},
    {name: 'D', age: 44},
]

const personOver25 = people.some((person) =>(person.age > 25));

console.log(personOver25)