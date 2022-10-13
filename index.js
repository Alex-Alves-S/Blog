const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")

//Router
const categoriesController = require("./categories/CategoriesController");


// View engine
app.set('view engine','ejs');

// Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// database

connection
    .authenticate()
    .then(()=>{
        console.log("Success Conection")
    }).catch((error) => {
        console.log(error);
    })





 app.use("/",categoriesController);

 
app.get("/", (req,res) => {
    res.render("index");
})



app.listen(8080, () =>{
    console.log("O servidor está rodando ...");
})