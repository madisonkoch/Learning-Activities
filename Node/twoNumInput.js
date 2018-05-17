// var input1 = (process.argv[2]);
// var input2 = (process.argv[3]);

// /**
//  * 
//  * @param {number} number1 
//  * @param {number} number2 
//  */
// function numberChecker(number1, number2){
//     if (number1 === number2){
//         console.log('true');
//     }
//     else {
//         console.log('false');
//     }
// }
// const checkNumber = numberChecker(input1, input2);

//Instructor solution
let argOne = parseInt(process.argv[2]);
let argTwo = parseInt(process.argv[3]);

if (argOne===argTwo) console.log(true);
else console.log("Both equal: " + false) ;

if (argOne % 7 === 0 && argTwo % 7 === 0) console.log("Both divisible by 7: " + true);
else console.log("Both divisible by 7: " + false);


