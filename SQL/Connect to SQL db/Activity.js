var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    insecureAuth: true,

    user: 'root',

    password: '',
    database: 'popquiz_db'
});

connection.connect(function(err) {
    if (err) console.log(err);
    //console.log("connected as id " + connection.threadId);
    console.log("yay");
    // connection.end();
  });

connection.query("SELECT * FROM popquiz_table", function(err, res) {
    if (err) console.log(err);

    console.log(res[0].text_field);
    }
);