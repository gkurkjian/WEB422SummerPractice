// // example 1
// 
// // constructor
// function Polygon(name, height, width) {
//     this.name = name;
//     this.height = height;
//     this.width = width;
// }
// 
// Polygon.prototype.sayName = function() {
//     console.log('Hi', this.name);
// }
// 
// let poly = new Polygon('name', 300, 300);
// poly.sayName();


// // we can make the code above as a class constructor
// class Polygon {
//     constructor(name, height, width) {
//     this.name = name;
//     this.height = height;
//     this.width = width;
//     }
// 
//     sayName = function() { console.log('Hi', this.name); }
// }
// 
// let poly2 = new Polygon('name', 300, 300).sayName();


/**********************************************************************************************/


// // example 2
// 
// // Prototype Based Class
// function Component(value) { 
//     this.value = value;
//  }
// 
//  Component.prototype.render = function() {
//      return `Hello ${this.value}`;
//  }
// 
// 
//  // ES6 Class
//  class Component {
//      constructor(value) {
//          this.value = value;
//      }
// 
//      render() {
//          return `Hello ${this.value}`;
//      }
//  }
// 
//  let comp = new Component(1234);
//  let rendered = comp.render();
// 
// 
//  // Functional Pattern (Pure )
// 
//  // Data ===>   Function  =====>  Output
//  function Component(value) {
//      return `Hello ${this.value}`;
//  }
// 
//  let rendered = Component(1234);




/**********************************************************************************************/


// // example 3
// 
// function f(a, b) {
//     return a + b;
// }
// 
// // function expression
// const g = function(a, b) {
//     return a + b;
// }
// 
// // another function expression using fat arrow style
// const j = (a, b) => {
//     let total = a + b;
//     return total;
// }
// 
// // another example to write the same code above
// const h = (a, b) => { return a + b }; 
// 
// const d = (a, b) =>  a + b ;   // this is a legit code like same the code above without the body of the function.



/**********************************************************************************************/


// example 4
// Destructing 

let user = {
    id: 1234,
    fname: 'George',
    lname: 'Kurkjian'
}

const fname = user.fname;  

// this style it's sort of blowing the object and picking part of if and work on it.
const { fname } = user;  // this line it's same as the line above.

// if the object doesn't exists, so set it to default@gmail.com
const { email = 'default@gmail.com' } = user;