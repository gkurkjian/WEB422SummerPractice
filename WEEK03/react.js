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
// Destructing object

// let user = {
//     id: 1234,
//     fname: 'George',
//     lname: 'Kurkjian'
// }
// 
// const fname = user.fname;  
// 
// // this style it's sort of blowing the object and picking part of if and work on it.
// const { fname } = user;  // this line it's same as the line above.
// 
// // if the object doesn't exists, so set it to default@gmail.com
// const { email = 'default@gmail.com' } = user;

// // Destructing array
// 
// let cord = [43.7955, -79.3496];
// let lat = cord[0];
// let lng = cord[1];
// 
// let [lat, lng] = cord;
// 
// function h(options) {
//     // options = options || {};
//     // const id = options.id;
//     // const name = options.name;
//     // const isAdmin = options.isAdmin;
// 
//     const { id, name, isAdmin } = options;  // Destructuring style set up instead of the line above. Or, se at line 139
//     console.log(id, name, isAdmin);
// }
// 
// function h(id, name, isAdmin) {  // or just include them at the top of the function
//     console.log(id, name, isAdmin);
// }
// 
// h ({
//     id: 8,
//     name: 'foo',
//     isAdmin: true
// });
// 
// h();



/**********************************************************************************************/

// example 5
// mutable 

// // once we create a string we cannot change it which is by default the strings are immutable in JS;
// // Look on line 165 that's the good practice to change the string if we wish to
// let s = 'Hello world';
// s.toUpperCase();  // if we're trying to convert the string into upper case unless we're printing it in console.log(), this will not serve us
// 
// console.log(s);  // will print Hello world
// 
// s = s.toUpperCase();  // this will set the string into upper case 
// 
// console.log(s);  // will print HELLO WORLD



/**********************************************************************************************/

// // example 6
// 
// 
// let user = {
//     id: 7,
//     name: 'George'
// }
// 
// // key: value
// 
// user.name = 'George Kurkjian';
// 
// user = {};  // make it empty object
// user = { id: 7, name: 'George'};  // same as the line 176
// 
// // Cloning the object
// user = { ...user };  // this is same as setting the object by the default as the line 170;
// console.log(user);
// 
// user = { id: 9, name: 'George'};
// console.log(user);
// 
// 
// // Cloning array example
// 
// let list = [1, 2, 3, 4];
// list = [ ...list ];  // it works the same. the output will be 1, 2, 3, 4
// 
// list = [ ...list, 5];  // adding some values init and it works fine.
// console.log(list);  // the output will be 1, 2, 3, 4, 5




/**********************************************************************************************/

// example 7

// JS style writing function
function createUserObject(id, name) {
    return {
        id: id,
        name: name
    }
}

let user = createUserObject(10, 'George');
console.log(user);

// newer JS and react style writing the same code
function createUserObject(id, name) {
    return {id, name};
}

// or shorter version with fat arrow function and giving default name 
const createUserObject = (id, name = 'Unknown') => ({ id, name });

let user1 = createUserObject(10, 'George');
console.log(user);