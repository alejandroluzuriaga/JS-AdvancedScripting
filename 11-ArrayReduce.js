// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
// Its very useful to create objects from an array.
// Every array method can be made with .reduce(), but is not always the fastest solution.

const numbers = [1, 2, 3, 4, 5];
const add = numbers.reduce((acc, next) =>{ //arguments are first and next element (for every iteration)
    console.log(acc, next) // Execute the code and watch how 'acc' and 'next' modify.
    return acc + next;
})

console.log(add);

const words = ['How', 'is', 'it', 'going', '?'];
const stringWords = words.reduce((acc, next) =>{
    console.log(acc, next) // Execute the code and watch how 'acc' and 'next' modify.
    return `${acc} ${next}`
})

const objectAnimals = [
    { icon: "🐼", herb: true },
    { icon: "🐥", herb: false },
    { icon: "🐮", herb: true },
    { icon: "🐯", herb: false },
  ];

  const herbAnimals = objectAnimals.reduce((acc, next) =>{
    console.log(acc, next)
    if (next.herb){
        acc.push(next);
    }
    return acc;
  }, []) //[] is the acc in the first iteration. 'Current value'.

  console.log(herbAnimals)