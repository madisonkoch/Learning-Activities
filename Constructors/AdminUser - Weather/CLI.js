var WeatherAdmin = require("./WeatherAdmin");
var Inquirer = require("inquirer");

// Hold the value whether someone is an "admin" or "user"
var loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
var userName = process.argv[3];

// And they will need to provide a "location"
var userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
var myAdmin = new WeatherAdmin();

if (loginType === "admin") {
  myAdmin.getData();
}
else {
  myAdmin.newUserSearch(userName, userLocation);
}

Inquirer.prompt([
    {
        type: 'list',
        message:'What kind of view do you want?',
        choices: ['Admin.','User'],
        default: 'User',
        name: 'viewType'
    }
]).then(answers => {
    if (answers.viewType ==='User'){
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
        ])
    }
    else{
        //suff
    }
});
