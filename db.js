const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'johnwick.cgufj8xolygi.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});


// connection.query('create database ccproject', function (error) {
//   if (error) throw error;
// });

connection.query("use ccproject", function (error) {
  if (error) throw error;
});


// connection.query("create table assignments(id int primary key,assignment_name varchar(255),due_date varchar(255))", function (error) {
//   if (error) throw error;
// });


module.exports = connection;
