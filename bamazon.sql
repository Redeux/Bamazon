CREATE DATABASE bamazon;

USE bamazon;
CREATE TABLE products (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INT NOT NULL
);

USE bamazon;
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('Tooth Picks', 'Food Accessories', 2.35, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('Q-Tips', 'Toiletries', 1.75, 400);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('T-Shirts', 'Clothing', 16.99, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('Crib', 'Furniture', 237.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('Laptop', 'Electronics', 927.99, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('Keyboard', 'Musical Instraments', 150.95, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('Flower Pot', 'Garden Supplies', 7.50, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('Sheets', 'Bed and Bath', 45.97, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('MP3s', 'Music', 2.99, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ('Globe', 'Home Decor', 47.95, 15);
