const express = require('express') //express
const nunjucks = require('nunjucks') //dependencia pra trabalhar com reaproveitamento de codigo

const server = express()

server.set("view engine", "njk")

server.use(express.static('public')) //arquivos estaticos

nunjucks.configure("views", { //configuração nunjucks
    express: server,
    autoescape: false,
    noCache:true
})

const receitas = require("./data") //puxando o arquivo data


server.get('/', function (req, res){
    return res.render("index", {items: receitas})
})

server.get('/receitas', function (req, res){
    return res.render("receitas", {items: receitas}) //retorna as receitas 
})

server.get('/sobre', function (req, res){
    return res.render("sobre") //retorna o sobre
})

server.get("/recipe/:id", function (req, res) {
  
    const recipeId = req.params.id //puxa o id e utilizo o recipeId no scripts
    
    return res.render("recipe", {recipe: receitas[recipeId]} ) 
    //direciona pra receita e pega os dados do Id
  })
  

server.listen(5000, function(){
    console.log("hello world")
})

