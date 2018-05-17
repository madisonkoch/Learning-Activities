
function Character(name,profession,gender,age,strength,hitPoints){
    this.name = name,
    this.profession = profession,
    this.gender = gender,
    this.age = age,
    this.strength = strength,
    this.hitPoints = hitPoints,
    this.printStats = function(){
        console.log("\nname: "+ this.name +"\nprofession: "+this.profession +"\ngender: "+this.gender + "\nage: "+this.age + "\nstregth: "+this.strength +"\nhit points: "+this.hitPoints +"\n");
    }
    this.isAlive = function(){
        if(this.hitPoints>0){console.log(this.name + " is alive")}
        else{console.log("dead")}
    }
    this.Attack = function(opponent){
            opponent.hitPoints = opponent.hitPoints - this.strength;   
            if (opponent.hitPoints<0){
                console.log(opponent.name + "has been defeated!")
            }
            else{
                console.log(opponent.name + "is still alive...")
                opponent.printStats();
            }
    }
    this.LevelUp = function(){
        this.age++;
        this.strength = this.strength + 5;
        this.hitPoints = this.hitPoints + 25;
        this.printStats();
    }
}

var ralph = new Character("Wreck It Ralph","Smashing Stuff","male",19,10,250);
var madamBlueberry = new Character("Madam Blueberry","none","female",44,3,200);


console.log("--Characters--")
ralph.printStats();
    console.log("----")
    madamBlueberry.printStats();
console.log("--alive?--");
    ralph.isAlive();
    madamBlueberry.isAlive();
console.log("--attack--")
    ralph.Attack(madamBlueberry);
console.log("--Level Up--");
    madamBlueberry.LevelUp();

