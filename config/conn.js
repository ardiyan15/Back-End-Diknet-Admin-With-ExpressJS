var mysql = require('mysql');

var con = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'diknet_db'
});

con.connect(function (err) {
    if(err) throw err;
});

module.exports = con;