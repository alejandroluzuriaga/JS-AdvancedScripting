//This method of Array Object works the same as ForEach, but has a main difference. 
//ForEach treat every element of the array, but it does not return anything. Array.map() does return a new array.
//Array.map() returns another array with those elements returned in every loop iteration.
//Every element on the array will be the return value of every iteration of the function.
//Also, the lenght of the new array will be exactly the same as original array.

const animals = ['🐼', '🐻', '🐸'];

// const food = []

// How we can do it with for loop.

            // for(let i=0; i < animals.length; ++i){
            //     const animal = animals[i];

            //     let animalFood; 

            //     if (animal === '🐼'){
            //         animalFood = '🎍';
            //     } else if (animal === '🐻'){
            //         animalFood = '🐟';
            //     } else{
            //         animalFood = '🐛'
            //     }
            //     food.push(animalFood);
            // }

            // console.log(`For the animals ${animals}`);
            // console.log(`Their favorite food is ${food}`);

//How we can do it with forEach

            // const getAnimalFood = (animal) => {
            //     let animalFood;

            //     if (animal === '🐼'){
            //         animalFood = '🎍';
            //     } else if (animal === '🐻'){
            //         animalFood = '🐟';
            //     } else{
            //         animalFood = '🐛'
            //     }
            //     food.push(animalFood);
            // }

            // animals.forEach(getAnimalFood);

//How we can do it with Map

const getAnimalFood = (animal) => { //Returns food depending on animal
    let food;

    if (animal === '🐼'){
        food = '🎍';
    } else if (animal === '🐻'){
        food = '🐟';
    } else{
        food = '🐛'
    }
    return food;
}

const animalFood = animals.map((animal) =>{ //Create food array iterating on animal's array, and pushing 1 food per iteration into animalFood.
    const food = getAnimalFood(animal)
    return food;
})

console.log(animalFood)
console.log(`For the animals ${animals}`);

