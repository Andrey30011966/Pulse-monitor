// migrations/1_create_users_table.sql (для PostgreSQL)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  device_id VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,
  role VARCHAR(10) CHECK (role IN ('admin', 'user'))
);
