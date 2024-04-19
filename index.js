const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const connection = require('./database/Connection');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('index')
});

app.listen (port, ()=>{
    console.log("listening on port:"+ port);
})