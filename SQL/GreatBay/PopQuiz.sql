DROP DATABASE IF EXISTS popquiz_db;
CREATE DATABASE popquiz_db;

USE popquiz_db;

CREATE TABLE popquiz_table(
  id INT NOT NULL AUTO_INCREMENT,
  text_field VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO popquiz_table (text_field)
VALUES ("How many elephants fit into a semi truck?");

INSERT INTO popquiz_table (text_field)
VALUES ("How many balloons did it take to lift the house in UP?");

INSERT INTO popquiz_table (text_field)
VALUES ("Where is the best sushi in the twin cities?");