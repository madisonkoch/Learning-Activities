var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    insecureAuth: true,

    user: 'root',

    password: '',
    database: 'music_db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllSongs();
    querySongsByGenre();
    connection.end();
  });

  function queryAllSongs() {
    connection.query("SELECT * FROM music_playlist", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
      }
      console.log("-----------------------------------");
    });
  }
  
  function querySongsByGenre() {
    var query = connection.query("SELECT * FROM music_playlist WHERE genre=?", ["Country"], function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
      }
    });
  
    // logs the actual query being run
    console.log(query.sql);
  };

  function addToPlaylist() {
    console.log("Inserting a new song...\n");
    var query = connection.query(
      "INSERT INTO music_playlist SET ?",
      {
        title: "Collard Greens",
        artist: "ScHoolboy Q",
        genre: "hip hop"
      },
      function(err, res) {
        console.log(res.affectedRows + " song inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        //updateProduct();
      }
    )
  }

addToPlaylist();
queryAllSongs();