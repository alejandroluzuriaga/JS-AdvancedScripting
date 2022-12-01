//The sort() sorts the elements of an array.
//The sort() overwrites the original array.
//The sort() sorts the elements as strings in ALPHABETICAL and ascending order by default.
//The sort() sorts the elements of an array according to the function in the parameter.

                                                                                //Sort functions for numbers:
                                                                                    const orderNumbersAscending = (a, b) => a-b
                                                                                    const orderNumbersDescending = (a, b) => b.a
                                                                                //Sort functions for strings:
                                                                                    const compareStringsAscending = (a, b) => a.localeCompare(b);
                                                                                    const compareStringsDescending = (a, b) => b.localeCompare(a);
const numbers = [3, 10, , 8 ,4, 5 , 1, 6 , 1];

    numbers.sort((a, b) =>{ //a is numbers[0] and b is numbers[1]
        return a>b ? (1) : (-1) ;
    });                         //if (a>b){return 1} if (a<b){return -1} else return 0;

console.log(numbers)

const names = ['John', 'Albert', 'Alex', 'Larry', 'Timmy', 'andy']
    names.sort((a,b) =>{
        return a.localeCompare(b); //localeCompare will return 1 if a>b, 0 if a=b or -1 a<b.
    })

console.log(names);

const people = [
    {name:'John', age: 30},
    {name:'Albert', age: 40},
    {name:'Alex', age: 65},
    {name:'Timmy', age: 20},
    {name:'andy', age: 98}]

    people.sort((a, b) =>{ //Sort alphabetically by name
        return compareStringsAscending(a.name, b.name)
    })

    people.sort((a, b)=>{ //Sort by ascending age
        return orderNumbersAscending(a.age, b.age);
    })
    console.log(people)

                                                                             
