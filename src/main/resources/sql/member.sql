CREATE TABLE member (
                        id INT AUTO_INCREMENT not null,
                        email VARCHAR(40) not null,
                        password VARCHAR(40) not null,
                        name VARCHAR(40),
                        multidevice int default 0,
                        payment varchar(100),
                        PRIMARY KEY (id),
                        UNIQUE (email)
);


