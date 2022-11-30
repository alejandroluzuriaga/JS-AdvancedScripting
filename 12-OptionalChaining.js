//Meaning: way of getting into complex nested properties.
//if expression pre-? is undefined then it wont search the value or call the function.
// Right-hand expression is not processed when the left-hand expression evaluated is null or undefined.
// Left-hand operand value when the left-hand operand is not null or undefined Syntax.
                                // Object?.property - check Static property
                                // Object?.[expresson] - Check Dynamic property
                                // array?.[index] - Check array index values
                                // function?.(args) - Checking in function calls

const power = {
    name: 'power-hammer',
    value: 20,
    use: () =>{console.log(`Using ${power.name}`)}
}
const hero = {
    name: 'Tor',
    powers: [power],
    protectedCities:[{
        name: 'Madrid'
    }] 
}

// const powerOne = hero.powers[0];
// let powerOneValue = 0;

//     if (powerOne){
//         powerOneValue = powerOne.value;
//     }

const powerOneValue = hero.powers[0]?.value || 0; //Optional chaining.
console.log(powerOneValue)
hero.powers[0]?.use?.(); //Optional chaining to use function 'use' inside of the first element of 'powers'.
                        //checking that actually exist before making the call.

console.log(hero.protectedCities?.[0]?.name) //We're avoiding nested IF's.
// We're doing: does protectedCities exist? --> and protectedCities[0]? --> if it does, take his name!