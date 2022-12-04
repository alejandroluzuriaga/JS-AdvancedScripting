//Async functions return a Promise and helps us to get a more readable and clean code when we have
//asyncronous functions in it. Allow us to use tools like 'try{..code}' and catch{..code} that given a piece
//of code, 'try' will try to resolve it, and if its not possible, then 'catch' will do his job. That will 
//make asyncronous functions 


          //--------------------What we would normally do with Fetch----------------------

// console.log('We ask POKEAPI for a pokemon');
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) => res.json())
//   .then((response) => {
//     console.log('Response: ', response);
//   }).catch(error => {
//     console.log('Error: ', error)
//   });
// console.log('Pokemon requested')


//If you launch this code in a Live Server and watch the console, we get the two console.log messages and 
//then the fetch response.

          //--------------------How cah we apply it with Async function and await command----------------------

const main = async () =>{
  console.log('We ask POKEAPI for a pokemon');
  let pokemon = null; //null by default.

  try{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); 
    const response = await res.json();
    console.log('Response: ', response);
    pokemon = response; //if response is OK, then pokemon is that data.
  } catch (error) {
    console.log('Error: ', error);
    };
    console.log('Pokemon requested');
};

main(); 

//First, we have now a function called main that is an 'async' function. 
//If you launch this code in a Live Server and watch the console, we get 
//first console.log --> API response --> second console.log. 
//Whats the useful thing about 'try'? An API request can fail, but execution of the rest of the code continues,
//and we get a more natural and organized code that executes in the order we read.