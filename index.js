const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const session = require("express-session");

//Router
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const UsersController = require("./user/UsersController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require("./user/User");



// View engine
app.set('view engine','ejs');

//session 
app.use(session({
    secret: "142536", cookie: { maxAge: 300000 }
}))

// Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// database

connection
    .authenticate()
    .then(()=>{
        console.log("Success Connection")
    }).catch((error) => {
        console.log(error);
    })


 app.use("/",categoriesController);
 app.use("/",articlesController);
 app.use("/",UsersController);

app.get("/", (req,res) => {
    Article.findAll({
        order:[
            ['id','DESC']
        ],
        limit:5
    }
    ).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", {articles: articles, categories: categories});
        });
    });
})

app.get("/:slug", (req, res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article =>{
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("article", {article: article, categories: categories});
            });
        }else{
            res.redirect("/");
        }
    }).catch(erro => {
        res.redirect("/");
    });
})

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include:[{model: Article}]
    }).then(category => {
        if(category != undefined){
            Category.findAll().then(categories =>{
                res.render("index",{articles: category.articles, categories: categories })
            });
        }else{
            res.redirect("/");
        }
    }).catch(error => {
        res.redirect("/");
    })
})


app.listen(8080, () =>{
    console.log("O servido está rodando ...");
})