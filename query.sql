CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT(8) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50),
  dept_name VARCHAR(50),
  price DECIMAL(7,2),
  stock_qty INT(8),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('Xbox One S 1 TB Console','Video Games','299.99','4500');

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('Xbox One X 1 TB Console','Video Games','599.99','5400');

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('Xbox One Wireless Controller','Video Games','45.87','6100');

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('Playstation 4 Pro 1TB Console','Video Games','398.95','3000');

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('Playstation VR','Video Games','149.99','600');

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('Playstation 4 1TB Slim Edition Console','Video Games','312.98','2500');

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('PlayStation 4 DualShock 4 Wireless Controller','Video Games','33.99','5700');

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('Nintendo Switch','Video Games','299.00','8100');

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('Nintendo Switch Super Smash Edition Console','Video Games','489.00','900');

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ('Nintendo Joy-Con (L/R)','Video Games','79.99','8900');