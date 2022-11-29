//Ternary is the only conditional with 3 operators in JS. Its used mainly like a shortcut to if else/switch conditional sentences.
//condition ? (expr1) : (expr2). 
//If contidition === true --> expr1. If condition === false --> expr2

                                        //First example 
    const age = 30;
    let isAllowed;

    if (age> 30){ //This block can be converted in a Ternary --> (age > 30) ? (isAllowed = true) : (isAllowed = false);
        isAllowed=true;
    } else{
        isAllowed = false;
    }

                                        //Second example 

const numberA = 2;
const numberB = 4;
let operation = 'multiply';

const multiply = (a, b) =>{return a*b}
const divide = (a, b) =>{return a/b}
const result = (operation === 'multiply') 
                ? (multiply(numberA, numberB)) 
                : (divide(numberA, numberB));


//We'll use them mainly when we have simple 'if else' sentences. In the case of complex functions with 'if else', its a good
//practice to try simply some of them with ternaries (WATCH OUT! Don't destroy your project haha)

//Other thing: don't nest ternaries. Makes the code unlegible and hard maintain.
