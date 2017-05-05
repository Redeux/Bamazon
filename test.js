"use strict";
const DB = require("./DBInstance.js"),
    promptly = require("promptly");

queryAllProducts();

function queryAllProducts() {
    const dbInstance = new DB();
    dbInstance.connect();

    dbInstance.select("*", "products", (error, response) => {
        if (error) throw error;

        console.log("\n");
        console.log(" ".repeat(27) + "Welcome to Bamazon!");
        console.log("\n");
        console.log("| " + "ID" + " " + " | " + "Department" + " ".repeat(15) + " | " + "Product" + " ".repeat(18) + " | " + "Price" + " ".repeat(3) + " |");
        console.log("-".repeat(74));
        for (let i = 0; i < response.length; i++) {
            console.log("| " + response[i].id + " ".repeat(3 - response[i].id.toString().length) + " | " + response[i].department_name + " ".repeat(25 - response[i].department_name.length) + " | " + response[i].product_name + " ".repeat(25 - response[i].product_name.length) + " | " + "$" + response[i].price + " ".repeat(7 - response[i].price.toString().length) + " |");
        }
        console.log("-".repeat(74));
        console.log("\n");

        promptUser();
    })

    dbInstance.end();
}

function promptUser() {
    let id,
        quantity;
    console.log('Select an item to purchase by enter the ID below:');
    promptly.prompt('Product: ').then(function(value) {
        id = value;
        promptly.prompt('Quantity: ').then(function(value) {
            quantity = value;
            placeOrder(parseInt(id), parseInt(quantity));
        })
    })
}

function placeOrder(id, quantity) {
    console.log("\n");
    let dbInstance = new DB();
    dbInstance.connect();

    dbInstance.selectWhere(['price', 'stock_quantity'], 'products', { "id": id }, (error, response) => {
        if (error) throw error;

        const stock_quantity = parseInt(response[0].stock_quantity),
            price = parseFloat(response[0].price);

        if (stock_quantity < quantity) console.log('Insufficient quantity!');
        else {
            let dbInstance = new DB();
            dbInstance.connect();

            const newQuantity = stock_quantity - quantity;
            dbInstance.updateWhere('products', { "stock_quantity": newQuantity }, { "id": id }, (error, response) => {
                if (error) throw error;
                console.log('Order Sucessful!');
                console.log('Your account will be billed $' + (price * quantity).toFixed(2));
            });

            dbInstance.end();
        }
    });

    dbInstance.end();
}
