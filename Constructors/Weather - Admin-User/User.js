var Inquirer = require("inquirer");
var Weather = require("weather-js");
var moment = require("moment");
var fs = require("fs");

var UserView = function(){ 
    Inquirer.prompt([
        {
            type: 'input',
            message: 'Name: ',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Location: ',
            name: 'location'
        }
    ]).then(answers=>{
        Weather.find({ search: answers.location, degreeType: "F" }, function(err, result) {
            if (err) {
            console.log(err);
            }
            console.log(JSON.stringify(result[0].current.temperature, null, 2)+" degrees Fahrenheit");
            
            var logTxt = "\nName: "+answers.name+"  Location: "+answers.location+"  Date: "+moment().format("MM-DD-YYYY");
            fs.appendFile("log.txt", logTxt,function(err){
                if (err) throw err;
            })
        });
    })
};

module.exports = UserView;