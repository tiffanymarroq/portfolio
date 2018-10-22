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
//   database : 'test'
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
 

module.exports = {
    path: '/api',
    handler: app
}