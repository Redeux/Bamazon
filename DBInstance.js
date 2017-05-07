const dbConfig = require("./db.json"),
    mysql = require("mysql");

function DBInstance() {
    this.connection = mysql.createConnection(dbConfig);
}

DBInstance.prototype.connect = function() {
    this.connection.connect(error => {
        if (error) throw error
    });
}

DBInstance.prototype.end = function() {
    this.connection.end();
}

DBInstance.prototype.select = function(select, from, callback) {
    this.connection.query('SELECT ?? FROM ??', [select, from], (error, response) => {
        if (error) return callback(error, null);
        else return callback(null, response);
    });
}

DBInstance.prototype.selectWhere = function(select, from, where, equals, callback) {
    this.connection.query('SELECT ?? FROM ?? WHERE ?? <= ?', [select, from, where, equals], (error, response) => {
        if (error) return callback(error, null);
        else return callback(null, response);
    });
}

DBInstance.prototype.insert = function(into, set, callback) {
    this.connection.query('INSERT INTO ?? SET ?', [into, set], (error, response) => {
        if (error) return callback(error, null);
        else return callback(null, response);
    });
}

DBInstance.prototype.updateWhere = function(update, set, where, callback) {
    this.connection.query('UPDATE ?? SET ? WHERE ?', [update, set, where], (error, response) => {
        if (error) return callback(error, null);
        else return callback(null, response);
    });
}

DBInstance.prototype.deleteWhere = function(from, where, callback) {
    this.connection.query('DELETE FROM ?? WHERE ?', [from, where], (error, response) => {
        if (error) return callback(error, null);
        else return callback(null, response);
    });
}

module.exports = DBInstance;