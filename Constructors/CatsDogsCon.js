// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Animal(rainingParam, noiseParam) {
    this.raining = rainingParam;
    this.noise = noiseParam;
    this.makeNoise = function() {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
  }
  
  // sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
  var dogs = new Animal(true, "Woof!");
  var cats = new Animal(false, "Meow!");
  
  // calling dogs and cats makeNoise methods
  dogs.makeNoise();
  cats.makeNoise();
  
  // if we want, we can change an objects properties after they're created
  cats.raining = true;
  cats.makeNoise();
  
  var massHysteria = function(dogs, cats) {
    if (dogs.raining === true && cats.raining === true) {
      console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
  };
  
  massHysteria(dogs, cats);


  //Practice
function Vehicle(numberOfEngines, color, sound){
    this.numberOfEngines = numberOfEngines,
    this.color = color,
    this.sound = sound,
    this.go = function(){
        console.log(this.sound);
    }
}

var boat = new Vehicle(2, "red", "vrooooooom!");
boat.go();