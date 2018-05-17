var inquirer = require("inquirer");
var Programmer = require("./Constructor.js");
    //the following constructor was moved to Constructor.js and called by the line above
        // function Programmer(name,job,age,favLang){
        //     this.name = name,
        //     this.job = job,
        //     this.age = age,
        //     this.favLang = favLang
        //     this.print = function(){
        //         console.log(name + "\n  Position/Title: " + job + "\n  Age: " + age + "\n  Favorite: " + favLang)
        //     }
        // }

let counter = 5;
let team = [];
let teamMembers = 1;

function recursion(){
    if (counter > 0){
        console.log("Programmer " + teamMembers )
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            },
            {
                name: "position",
                message: "What is your position / job title?"
            },
            {
                name: "age",
                message: "What is your age?"
            },
            {
                name: "favorite",
                message: "What is your favorite programming language?"
            }
        ]).then(function(createNewProgrammer){
            var newProgrammer = new Programmer(createNewProgrammer.name, createNewProgrammer.position,createNewProgrammer.age,createNewProgrammer.favorite);
            //newProgrammer.print();
            team.push(newProgrammer);
            teamMembers++;
            counter--;
            recursion();
        }).catch(err =>{
            console.log("We're sorry, something went wrong.")
        })        
    }
    else {
        for (i=0;i<counter;i++){
            console.log(team[i]);
        }
    }
}

recursion();