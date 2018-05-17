var Students = require("./students.js");

function Classroom(professor,roomNumber){
    this.students = [],
    this.numStudents = this.students.length,
    this.professor = professor,
    this.roomNumber = roomNumber
    this.addStudent = function(name, favorite, gpa) {
        this.students.push(new Students(name, favorite, gpa));
        this.numStudents = this.students.length;
      };
    this.print = function(){
        console.group("Room "+ this.roomNumber);
            console.log("Teacher: "+ this.professor);
            console.log("Number of Students: "+ this.numStudents);
        if (this.students.length > 0){
            console.group("Students:");
            this.students.forEach(function(elem){
                console.log(elem.name);
            })
            console.groupEnd()
        }
        else{
            console.log("   Students: 0")
        }
        console.groupEnd();
    }
};

var abc = new Classroom("Ms.Koch",204);
abc.addStudent("jimmy","science",2.3);
abc.addStudent("mary","math",3.8);
abc.print();
