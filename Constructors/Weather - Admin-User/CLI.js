var UserView = require("./User");
var AdminView = require("./Admin");
var Inquirer = require("inquirer");

Inquirer.prompt([
    {
        type: 'list',
        message:'What kind of view do you want?',
        choices: ['Admin','User'],
        default: 'User',
        name: 'viewType'
    }
]).then(answers=>{
    console.log(answers.viewType);
    switch(answers.viewType){
        case "Admin":
        AdminView();
        break;
      
      case "User":
        UserView();
        break;
    }
});