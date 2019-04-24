CREATE DATABASE
IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE
IF NOT EXISTS burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR
(100),
    devoured BOOLEAN,
    PRIMARY KEY
(id)
);