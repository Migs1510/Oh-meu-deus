CREATE DATABASE delivery;

CREATE TABLE dishes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10, 2),
  category VARCHAR(50),
  restaurant_id VARCHAR(50)
);
