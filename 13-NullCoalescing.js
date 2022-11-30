
// Logical operator that applies two operands and returns its value of:
    // right-hand operand value when the left-hand operand is null or undefined.
    // left-hand operand value when the left-hand operand is not null or undefined. 

                    //Syntax: const variable = Left Operand ?? Right Operand

//We'll try to use OR as often as we can, and use this operator in special occasions (like needing empty spaces, 
//or 0 values in the data we're getting).   

const response = {
    age: 10,
    balanceInBank: 0
}
const age = response.age ?? 15;

console.log(age); //If we comment line 8, we'll get right-hand after '??' => 15. Otherwise we'll get 10.