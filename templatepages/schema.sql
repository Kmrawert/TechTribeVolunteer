DROP DATABASE IF EXISTS volunteers_db;
CREATE database volunteers_db;

USE volunteers_db;


CREATE TABLE users (
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NULL,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NULL,
  password VARCHAR(100) NULL,
  createdAt VARCHAR(100) NULL,
   updatedAt VARCHAR(100) NULL,
  PRIMARY KEY (username)
);

CREATE TABLE events (
  eventName VARCHAR(100) NOT NULL,
  eventCategory VARCHAR(100) NULL,
  eventDate VARCHAR(100) NULL,
  numOfVolunteers INT NULL,
  volunteersNeeded INT NULL,
  PRIMARY KEY (eventName)
);


INSERT INTO users 
    (
        firstName,
        lastName,
        username,
        email,
        password,
        createdAt,
        updatedAt
    )
VALUES 
    (
        "Taylor",
        "Brady",
        "Tbrady",
        "taylor.brady13@gmail.com",
        "testpassword",
        NOW(),
        NOW()
    )
   
;



INSERT INTO events
    (
        eventName,
        eventCategory,
        eventDate,
        numOfVolunteers,
        volunteersNeeded
    )  
VALUES 
    (
        "Tester",
        "Tester",
        "feb/11",
        "5",
        "5"
        
    )
   
;