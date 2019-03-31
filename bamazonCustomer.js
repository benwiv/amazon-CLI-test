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
  // console.log(`connected as user ID: ${con.threadId}`);
  // console.log(`connected as user ID: ${con.threadId}`);
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
    chooseProduct();
  });
};


//=========BEGIN CLI APPLICATION=========//
const chooseProduct = function () {
  inquirer
  .prompt([
    {
      type: "input",
      message: "Please take a look at the available products and their prices above. Type in the Item ID # for the product you wish to purchase: ",
      name: "ID"
    },
    {
      type: "input",
      message: "Please type the quanity you wish to purchase (integer values only): ",
      name: "qty"
    }
  ])
  .then(function(input) {
    let itemID = input.ID;
    let itemQty = parseInt(input.qty);
    //pull current quantity
    connection.query(
      "SELECT stock_qty FROM products WHERE ?",
      {
        item_id: itemID
      },
      function(err, res) {
        if (err) throw err;
        let currentQty = res[0].stock_qty;
        if ((currentQty - itemQty) > 0) {
          console.log(`The product is in stock! Your order will now be processed.`);
          // removeQty(itemId, itemQty);
        } 
        else {
          console.log(`Sorry, that product is not currently in stock and we cannot take your order at this time.`);
          // resetPrompt();
        }
      }
    );
  });
}

// chooseProduct();
showProducts();
