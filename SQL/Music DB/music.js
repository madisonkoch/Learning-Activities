var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    insecureAuth: true,

    user: 'root',

    password: '',
    database: 'TOP5000'
});

connection.connect(function(err) {
    if (err) console.log(err);
    //console.log("connected as id " + connection.threadId);
    console.log("yay");
    // connection.end();
  });

connection.query("SELECT * FROM TOP5000", function(err, res) {
    if (err) console.log(err);

    console.log(res);
    }
);