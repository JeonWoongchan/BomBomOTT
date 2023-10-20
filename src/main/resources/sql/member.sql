CREATE TABLE member (
     id INT AUTO_INCREMENT,
     userid VARCHAR(40),
     password VARCHAR(40),
                        name VARCHAR(40),
                        email VARCHAR(40),
                        PRIMARY KEY (id),
                        UNIQUE (userid)
);

