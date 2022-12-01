const numbers = [1, 4, 6, 3, 2, 1, 0, 9];
const evenNumbers = [];
const oddNumbers = [];

let count = 0;

numbers.forEach((element, index) => {
    if (element > 3){
        count += 1;
        console.log(`Element greater than 3 found in ${index}`)
    }
});

numbers.forEach((element) =>{
    element % 2 === 0
    ? evenNumbers.push(element) 
    : oddNumbers.push(element);
})

console.log(evenNumbers);
console.log(oddNumbers);