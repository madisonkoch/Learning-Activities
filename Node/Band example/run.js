var bandList = require ("./band.js");

//Console log for all bands & their genre
// for (var key in bandList){
//     console.log("A " + key + " band is " + bandList[key])
// }

const userArg = process.argv[2];

/**
 * 
 * @param {array} bandArray 
 * @param {string} bandGenre 
 */
 function bandChecker(bandArray, bandGenre){
    if (bandGenre in bandList){
        for (var key in bandList){
            if (bandGenre === key){
                console.log(bandList[key])
            }

        }
    }        
    else {
        for (var key in bandList){
            console.log("A " + key + " band is " + bandList[key])
        }
    }
}

 const newArray = bandChecker(bandList, userArg)