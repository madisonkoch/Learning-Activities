DROP DATABASE IF EXISTS music_db;

CREATE DATABASE music_db;

USE music_db;

CREATE TABLE music_playlist(
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(50),
  artist VARCHAR(50),
  genre VARCHAR(50),
  PRIMARY KEY (id)
);

INSERT INTO music_playlist (title, artist, genre)
VALUES ("All About That Bass", "Meghan Trainor", "Pop");

INSERT INTO music_playlist (title, artist, genre)
VALUES ("Are You Gonna Be My Girl", "Jet", "Alternative");

INSERT INTO music_playlist (title, artist, genre)
VALUES ("Aw Naw", "Chris Young", "Country");

SELECT * FROM music_db.music_playlist;