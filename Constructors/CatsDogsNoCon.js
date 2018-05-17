const dog = {
    raining: true,
    noise: "Woof!",
    makeNoise: function(){
        if(this.raining===true){
            console.log(dog.noise);   
        }
    }
};

const cat = {
    raining: false,
    noise: "Meow!",
    makeNoise: function(){
        if(this.raining===true){
            console.log(cat.noise); 
        }
    }
};

dog.makeNoise();
cat.raining = true;
cat.makeNoise();

const massHysteria = function (dog, cat){
    if (dog.raining===true && cat.raining===true){
        console.log("DOGS & CATS LIVING TOGETHER!? MASS HYSTERIA!")
    }
};

massHysteria(dog,cat);
