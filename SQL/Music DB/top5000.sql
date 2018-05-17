DROP DATABASE IF EXISTS TOP5000;
CREATE DATABASE TOP5000;

USE TOP5000;

CREATE TABLE TOP5000(
  id INT NOT NULL,
  artist varchar(100) not null,
  title varchar(100) not null,
  released int not null,
  world_sales decimal(10,2),
  us_sales decimal(10,2),
  uk_sales decimal(10,2),
  eu_sales decimal(10,2),
  other_sales decimal(10,2),
  PRIMARY KEY (id)
);

SELECT * FROM TOP5000;