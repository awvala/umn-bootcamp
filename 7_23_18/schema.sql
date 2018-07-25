DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000 (
position INTEGER(6) NOT NULL,
artist VARCHAR(30) NOT NULL,
song VARCHAR(50) NOT NULL,
year SMALLINT(4) NOT NULL,
raw_total FLOAT(10,3) NOT NULL,
raw_usa FLOAT(10,3) NOT NULL,
raw_uk FLOAT(10,3) NOT NULL,
raw_eur FLOAT(10,3) NOT NULL,
raw_row FLOAT(10,3) NOT NULL
);

# Group By Song Example

SELECT COUNT(position), artist
FROM top5000
GROUP BY artist
ORDER BY COUNT(position) DESC;

# Search Artist Like Example

SELECT * FROM top5000 
WHERE artist 
LIKE '%he Beatl%';

# Between Example

SELECT * FROM top5000 
WHERE year 
BETWEEN 1964 AND 1965;