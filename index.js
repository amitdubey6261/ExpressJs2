const express = require('express');
var exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
app.engine('handlebars' , exphbs.engine());
app.set('view engine', 'handlebars'); 

// connect mongodb
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'bookstore';
const client  = new MongoClient(url);
// _____________________________________________________________

// getting data
async function getData(){
  let res = await client.connect();
  let db  = res.db(dbName);
  let collection = db.collection('books');
  let response = await collection.find({}).toArray();
  console.log(response);
}
getData();
// _____________________________________________________________



app.use(express.static(path.join(__dirname, 'static')));
app.use('/' , require(path.join(__dirname, 'routes/blog.js')));

app.listen(port , ()=>{
    console.log(`The blog is listening on ${port}`);
})