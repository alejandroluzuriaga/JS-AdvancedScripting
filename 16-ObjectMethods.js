const hero = {
    name: 'Superman',
    power: 40,
    defense: 10,
} //we want to create an array with every value of hero like this --> ['Superman', 'power',...]

                    //Object.keys(object): returns an array with every key of the object.

const heroKeys = Object.keys(hero);
    console.log(heroKeys)
    
    //How can we make it useful? Lets say we want to calculate total power of the object based on his power and defense:

    let totalPower = 0;
heroKeys.forEach((key)=>{
    if (key === 'power'){
        totalPower += hero[key];
    }

    if (key === 'defense'){
        totalPower += hero[key]/2;
    }
})

console.log('Total power of Superman is: ', totalPower)

                    //Object.values(object): returns an array with every key value of the object.

const objectValues = Object.values(hero);
console.log(objectValues);

//How can we make it useful? Lets say we have an object with ID of a student and score and we want to calculate the mean.

const scores = { 
    '123456789A': 10,
    '123456789B': 5,
    '123456789C': 8,
    '123456789D': 2,
}

const scoreValues = Object.values(scores);
console.log(scoreValues)

let average = 0;
scoreValues.forEach((score) =>{
    average += score;
})

average /= scoreValues.length;
console.log('Mean score in the class is', average)

                        //Object.entries(): returns an array with two elements: key and value.

const hero_entries = Object.entries(hero);
console.log(hero_entries)