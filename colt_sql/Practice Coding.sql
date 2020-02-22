CREATE TABLE cats
	(
	cat_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100),
	breed VARCHAR(100),
	age INT,
	PRIMARY KEY (cat_id)
	);

INSERT INTO cats(name, breed, age)
VALUES ('Ringo', 'Tabby', 4),
('Cindy', 'Maine Coon', 10),
('Dumbledore', 'Maine Coon', 11),
('Egg', 'Persian', 4),
('Misty', 'Tabby', 13),
('George Michael', 'Ragdoll', 9),
('Jackson', 'Sphyx', 7);

CREATE TABLE shirts
(
shirt_id INT NOT NULL AUTO_INCREMENT,
article VARCHAR(20),
color VARCHAR (20),
shirt_size VARCHAR(3),
last_worn INT,
PRIMARY KEY (shirt_id)
);

 UPDATE cats SET name = "Jack" WHERE name = "Jackson";

SELECT CONCAT(author_fname, ' ', author_lname) AS 'Full Name' FROM books; 

CONCAT_WS(" - ", title, author_fname, author_lname);

SELECT REPLACE(title, 'e', '3');

SELECT 
SUBSTRING
(
	REPLACE(title, 'e', '3')
)
REPLACE(title, "3", "3") FROM books;