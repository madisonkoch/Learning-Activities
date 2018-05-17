var fs = require("fs");

var AdminView = function(){
    fs.readFile("log.txt","utf8",function(error,data){
        console.log(data);
    })
};

module.exports = AdminView;