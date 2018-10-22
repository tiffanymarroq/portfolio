const express = require('express');
const router = express.Router();
const app = express();
const mysql = require('mysql');

// router.use((req, res, next) => {
//   Object.setPrototypeOf(req, app.request)
//   Object.setPrototypeOf(res, app.response)
//   req.res = res
//   res.req = req
//   next()
// })
// router.post('/track-data', (req, res) => {
//     console.log('stored data', req.body.data);
//     res.status(200).json({message:'Success'});
// });
// console.log('in api')

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodemysql'
});
 
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected');
});

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Created database...');
    });
})

// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert post 1

app.get('/posts', function(request, response){
    db.query('select * from posts', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            console.log('get posts obj');
            // console.log(results[0].title);
            response.send(results);
        }
    });
});

module.exports = {
    path: '/api',
    handler: app
}