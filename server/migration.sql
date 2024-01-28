DROP TABLE IF EXISTS userInfo;

CREATE TABLE userInfo (
  id SERIAL,
  userName varchar(30),
  password varchar(30)
);

INSERT INTO userInfo(userName, password) VALUES('KylerNim', 1234);
INSERT INTO userInfo(userName, password) VALUES('John Wick', 4321);