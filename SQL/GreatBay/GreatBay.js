var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    insecureAuth: true,

    user: 'root',

    password: '',
    database: 'greatBay_db'
});

connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);
    start();
    // connection.end();
  });

  function start() {
    inquirer
      .prompt({
        name: "postOrBid",
        type: "checkbox",
        choices: ["POST", "BID"],
        message: "Would you like to [POST] an auction or [BID] on an auction?\n"

      })
      .then(function(answer) {
        if (answer.postOrBid[0] === "POST") {
          postAuction();
          //console.log("post away!")
        }
        else {
          bidAuction();
          //console.log("bid away!")
        }
      });
  };
  function postAuction() {
    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "What is the item you would like to submit?"
        },
        {
          name: "category",
          type: "input",
          message: "What category would you like to place your auction in?"
        },
        {
          name: "startingBid",
          type: "input",
          message: "What would you like your starting bid to be?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO auctions SET ?",
          {
            item_name: answer.item,
            category: answer.category,
            starting_bid: answer.startingBid
          },
          function(err) {
            if (err) throw err;
            console.log("Your auction was created successfully!");
            // go back to start -- bid or post?
            start();
          }
        );
      });
  }
  
  function bidAuction(){
      inquirer.prompt([
          connection.query("SELECT * FROM auctions",function(err,res){
              console.log(res);
          })
      ])
  }