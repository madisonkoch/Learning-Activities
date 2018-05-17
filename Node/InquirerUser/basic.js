// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your superhero name?',
        name: 'username'
    },
    {
        type: 'list',
        message:'Which superpower do you have?',
        choices: ['none', 'x-ray vision', 'super strength', 'super speed','elasticity','telepathy'],
        default: 'none',
        name: 'superpower'
    },
    {
        type:'confirm',
        message: 'Are you sure you can handle the responsibility?',
        name: 'confirmation',
        default: 'Y'
    },
    {
        type:'checkbox',
        message: 'Who would you invite to be on your superhero team?',
        choices:['Batman', 'The entire Incredibles family', 'Super Woman','Green Lantern','Thor','Spiderman','Storm','Catwoman'],
        name: 'teammates'
    },
    {
        type: 'password',
        name: 'password',
        message: 'What is the superhero secret password? (hint: your kind of hero)'
    }
]).then(answers => {
    if (answers.password==='super'){
        console.log('Congrats'+ answers.username +'!');
        console.log('Because of your '+ answers.superpower+ 'superpower, ' +answers.teammates +' accepted your invite to the team.')
    }
    else{
        console.log('Bad news '+ answers.username +'...');
        console.log('Because you did not know the superhero secret password, ' +answers.teammates +' all thought you were a fraud and declined your invite to the team.')
    }
});