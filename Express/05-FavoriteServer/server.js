var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    var path = req.url;

    switch (path){
        case "/":
            return displayHome (path, req, res);
        
        case "/foods":
            return displayFood(path, req,res);

        case "/movies":
        return displayMovies(path, req,res);

        case "/css":
        return displayCSS(path, req,res);

        default:
        return display404(path, req, res);
    }
}

function displayHome(url, req, res){
    fs.readFile(__dirname + "/index.html", function(err,data){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}
function displayFood(url, req, res){
    fs.readFile(__dirname + "/food.html", function(err,data){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}
function displayMovies(url, req, res){
    fs.readFile(__dirname + "/movies.html", function(err,data){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });;
}
function displayCSS(url, req, res){
    fs.readFile(__dirname + "/cssFramework.html", function(err,data){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}
function display404(url, req, res) {
    var myHTML = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + url + " can not be found</p>" +
      "</body></html>";
  
    res.writeHead(404, { "Content-Type": "text/html" });
  
    res.end(myHTML);
}
  

server.listen(PORT,function(){
    console.log("Server is listening on PORT: " + PORT);
})