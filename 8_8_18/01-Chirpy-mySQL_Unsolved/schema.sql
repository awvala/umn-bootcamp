DROP DATABASE IF EXISTS chirpy;

CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  author VARCHAR(50) NOT NULL,
  chirp VARCHAR(140) NOT NULL,
  time_created DATETIME NOT NULL,
  primary key(id)
);