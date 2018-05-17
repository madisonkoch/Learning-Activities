// Create a function called nameChecker that takes two parameters, an array 
// of lowercase names and a number. For each name in the array that is longer
// than the number parameter, console.log out "The name 'name' is longer than 
// 'number' characters". Return an array of names that are longer than the number
// from the function and console that out as well. 

//To run this function `cd` to the directory the file is in and run `node whateverYouNameThis.js`
//const userArg = process.argv[2];
const userArg = process.argv[2];

/**
 * This function returns an array of names longer than the number param
 * @param {array} arrayParam //array is like a built in for loop, it'll do the function (namechecker) on each element in array.
 * @param {number} numberParam 
 * @return {array}
 */

//  function nameChecker(arrayParam, numberParam) {
//     return arrayParam.filter(function(elem){ //elem (or whatever you put in) represents every element in the array.
//         return elem.length > numberParam
//     }).map(function(elem){
//         console.log(`The name ${elem} is longer than ${numberParam} characters`)
//         return elem;
//     })
//   }

// Fat arrow syntax --- has implicit return so no need to put in "return"
  function nameChecker(arrayParam, numberParam) {
    if (isNaN(numberParam)){
        console.log('Please try again using a number.')
    }
    return arrayParam.filter(elem => elem.length > numberParam)
   //.map(elem => {
    .forEach (elem => { //forEach & map are similiar but no the same
        console.log(`The name ${elem} is longer than ${numberParam} characters`);
        return elem;
    })
  }
  
  const namesArray = ['joshua', 'owen', 'miles', 'cassandra'];
  const newArray = nameChecker(namesArray, userArg)
  console.log(newArray)
  
  // Expected output:
  // The name Joshua is longer than 5 characters
  // The name Cassandra is longer than 5 characters
  // ['joshua', 'cassandra']