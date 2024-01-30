DROP TABLE IF EXISTS characterData;
DROP TABLE IF EXISTS userInfo;

CREATE TABLE userInfo (
  id SERIAL PRIMARY KEY,
  userName varchar(30),
  password varchar(30)
);

INSERT INTO userInfo(userName, password) VALUES('KylerNim', '1234');
INSERT INTO userInfo(userName, password) VALUES('John Wick', '4321');

CREATE TABLE characterData (
  id SERIAL,
  hp integer,
  items varchar[],
  userPosition varchar(30),
  hasBeen varchar[],
  user_id integer,
  FOREIGN KEY (user_id) REFERENCES userInfo(id)
  ON DELETE CASCADE
);

INSERT INTO characterData(hp, userPosition, user_id, hasBeen, items) VALUES(20, 'pod', 1, ARRAY['pod'], ARRAY['pet']);