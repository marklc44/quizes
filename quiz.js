function Person(name, height, age) {
  this.name = name || '';
  this.height = height || '';
  this.age = age || 0;
  this.sleeping = false;
}

Person.prototype.eat = function() {
  return "nom, nom, nom";
};

Person.prototype.sleep = function() {
  this.sleeping = true;
};

Person.prototype.wakeUp = function() {
  this.sleeping = false;
};

function Student() {
  this.studying = false;
}

var inherit = function(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
};

inherit(Student, Parent);

Student.prototype.study = function() {
  this.studying = true;
};

Student.prototype.stopStudy = function() {
  this.studying = false;
};

Student.prototype.sleep = function() {
  if(this.studying === false) {
    this.sleeping = true;
  } else {
    return "can't sleep yet";
  }
};

module.exports.person = Person;
module.exports.student = Student;