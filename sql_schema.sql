CREATE TABLE IF NOT EXISTS "users" (
  user_id serial PRIMARY KEY,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  create_at TIMESTAMP NOT NULL,
  last_login TIMESTAMP
)