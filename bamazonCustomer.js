const inquirer = require('inquirer');
const mysql = require('mysql');
const formatTable = require('cli-table2');

const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Int^Rad1354",
  database: "bamazon_db"
});

con.connect((err) => {
  if (err) throw err;
  console.log(`connected as user ID: ${con.threadId}`);
});

const table = new formatTable({ head: ['Item ID', 'Product', 'Price'] });

const showProducts = function(){
  con.query('SELECT item_id, product_name, price FROM products', function (err, res,) {
    if (err) throw err;
    let productArr = res;
    for (i=0; i<productArr.length; i++) {
      let product = productArr[i];
      table.push(
        [`${product.item_id}`, `${product.product_name}`, `${product.price}`]);
    }
    console.log(table.toString());
  });
};


//   BEGIN CLI APPLICATION


showProducts();