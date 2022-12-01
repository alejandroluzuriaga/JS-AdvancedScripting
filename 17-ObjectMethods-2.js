const student = {
    name: 'Alex',
    master: 'Full Stack',
    job: 'Software Engineer',
}  
//delete Object -- delete Object.attribute: 
//------------------------------------------------------------------

                //How can we get rid of Alex's job in the next object? 

// One way is asign student.job to null:    
student.job = null;
console.log({
    keys: Object.keys(student),
    values: Object.values(student)
})      

//Other way is just deleting the key job directly: (less efficent than null, but the key 'job' no longer exists)
delete student.job;
console.log({
    keys: Object.keys(student),
    values: Object.values(student)
})

//Object.freeze 
//------------------------------------------------------------------
//Object.freeze prevents extensions and makes existing properties non-writable and non-configurable. 
//A frozen object can no longer be changed or deleted.

Object.freeze(student);

student.name = 'John'; //We try to change student.name.
delete student; //We try to delete student object.

console.log({ //Stills showing us the object unmodified.
    keys: Object.keys(student),
    values: Object.values(student)
}) 