const students = ['John', 'Maria', 'Tiffany', 'Lorde', 'Paula' ]
//REST OPERATOR
//------------------------------------------------------------
//Lets say that students array has the best grades of a class sorted by higher on first places.
    //We would like to get the first 3 best grades in the class based on the students array.

const [firstStudent, secondStudent, thirdStudent] = students;
console.log('The three higher grades on the class are: ', {
    firstStudent,
    secondStudent,
    thirdStudent
});

    //Lets say we want to get fourth student, but not the rest.

const [,,, fourthStudent] = students; //Commas represent how many elements we do not want.
console.log('The fourth higher grade on the class is: ', {
    fourthStudent
});

    //Lets say we want to get the ones from the end of array (2).

const [,,, ...restStudents] = students;
console.log('The last 2 students are:', restStudents);

    //Other way to get N elements from the end of array.

const reverseStudents = students.slice().reverse(); //copy of 'students' reversed.
const [lastStudent, nextToLast] = reverseStudents;

console.log('Worst two grades are:', {
    lastStudent,
    nextToLast,
});

//SPREAD OPERATOR
//------------------------------------------------------------
//Theres a new array of new students that we want to merge with the 'students' array.

const newStudents = ['Louis','Max'];

const allStudents = [
    ...students,
    ...newStudents, //We're merging both students array into one 'allStudents' and getting the new ones at the end of array.
]
console.log(allStudents);

//Spread Operator with Math class
//------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];
const max = Math.max(...numbers); //This function only accepts separated arguments, and spreading helps us to separate
                                 // the elemnts of the array and ¡get them into the function like arguments!
const min = Math.min(...numbers);

console.log([`Max number is: ${max}`, `Min number is: ${min}`])