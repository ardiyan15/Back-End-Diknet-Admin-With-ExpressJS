'use strict';

var response = require('../res');
var connection = require('../config/conn');

exports.index = (req, res) => {
    response.ok("Welcome To ExpressJS", res);
}

exports.users = (req, res) => {
    connection.query('SELECT * FROM customer', (error, rows, fields) => {
        if(error){
            throw error;
        }
            rows.map((item,index) => {
                console.log(item.name);
            });
            response.ok(rows, res);
    });
}

exports.getDetailUserById = (req,res) => {

    var id = req.params.id;

    connection.query("SELECT * FROM customer WHERE id = ?", [id], (error,rows,fields) => {
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log(id);
            response.ok(rows, res);
        }
    })
}

exports.findUser = (req, res) => {

    var name        = ["%" + req.body.name + "%"];
    var handphone   = ["%" + req.body.handphone + "%"];
    var address     = ["%" + req.body.address + "%"];
    var product     = ["%" + req.body.product + "%"];
    var price       = ["%" + req.body.price + "%"];

    connection.query('SELECT * FROM customer WHERE name LIKE ? OR handphone LIKE ? OR address LIKE ? OR product LIKE ? OR price LIKE ?', [name, handphone, address, product, price] , (error, rows, result) => {
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}

exports.createUser = (req, res) => {
    var name        = req.body.name;
    var handphone   = req.body.handphone;
    var address     = req.body.address;
    var product     = req.body.product;
    var price       = req.body.price;

    connection.query('INSERT INTO customer (name, handphone, address, product, price) VALUES (?,?,?,?,?)', 
        [name, handphone, address, product, price], (error, rows, fields) => {
            if(error) {
                console.log(error)
            } else {
                response.ok('Insert Data Successfully', res);
            }
        }
    );
}

exports.updateUser = (req, res) => {
    var id          = req.body.id;
    var name        = req.body.name;
    var handphone   = req.body.handphone;
    var address     = req.body.address;
    var product     = req.body.product;
    var price       = req.body.price;

    connection.query('UPDATE customer SET name = ?, handphone = ?, address = ?, product = ?, price = ? WHERE id = ?', 
        [name, handphone, address, product, price, id], (error, rows, fields) => {
            if(error) {
                console.log(error);
            } else {
                response.ok('Update Data Successfully', res);
            }
        }
    );
}

exports.deleteUser = (req, res) => {
    var Id = req.body.Id;

    connection.query('DELETE FROM customer WHERE id = ?', 
        [Id], (error, rows, fields) => {
            if(error) {
                console.log(error);
            } else {
                response.ok('Delete Data Successfully', res);
            }
        }
    );
}