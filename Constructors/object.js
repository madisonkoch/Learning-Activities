const instructor = {
    name: "Josh",
    age: 33,
    teach: function(){
        console.log('blah, blah, blah, object, blah...')
    }
}

instructor.teach()

//Copying by Value
console.log("copy by value")

const first = 33;
let second = first;

second = 44;

console.log(first);
console.log(second);

//Copying by Reference
console.log ("copy by ref")

const one = {
    name: "Josh",
    age: 33
}
let two = one;

two.age = 44;

console.log(one);
console.log(two);

//Spread Operator (i.e. {...xxxxx})
console.log("spread operator")

const uno = {
    name: "Josh",
    age: 33
}
let dos = {...uno};

dos.age = 44;

console.log(uno);
console.log(dos);