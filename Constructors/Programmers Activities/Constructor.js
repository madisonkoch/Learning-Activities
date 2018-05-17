function Programmer(name,job,age,favLang){
    this.name = name,
    this.job = job,
    this.age = age,
    this.favLang = favLang
    this.print = function(){
        console.log(name + "\n  Position/Title: " + job + "\n  Age: " + age + "\n  Favorite: " + favLang)
    }
};

module.exports = Programmer();