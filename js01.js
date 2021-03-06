var x = 5;
var y = 6;
var z = x + y;
console.log(z);

var price1 = 11;
var price2 = 9;
var total = price1 + price2;
console.log("total price is " + total);

var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
console.log(pi + " " + person + " " + answer);

var a = 5 + 2 + 3;
var aa = "5" + 2 + 3;
var aaa = 2 + 3 + "5";
console.log(a + " " + aa + " " + aaa);

var b = 5;
var bb = 2;
var bbb = b * bb;
var bbbb = b + bb;
console.log(bbb + " " + bbbb);

var txt1 = "what a very ";
txt1 += "nice day";
console.log(txt1);

//Data Types
var length = 16;                                //Number
var lastName = "Johnson";                       //String
var salary = [2000,2200,2400,2100];             //Array Object
var obj1 = {firstName:"John", lastName:"Doe"};  //Object

console.log(typeof length);
console.log(typeof lastName);
console.log(typeof salary);
console.log(typeof obj1);

var x1 = 5;
var y1 = 5;
var z1 = 6;
console.log(x1 == y1);
console.log(x1 == z1);

// Primitive Data
// 1 string
// 2 number
// 3 boolean
// 4 undefined

// Complex Data
// 1 function
// 2 object

// Function 
function myFunction(p1, p2) {
    return p1 * p2;
}
console.log(myFunction(3,4));

function toCelsius(f) {
    return (5/9) * (f-32);
}
console.log(toCelsius(77));

// Accessing Object
var car = {type: "Fiat", model: "500", color: "White"};
console.log(car.type);

var fruits = ["Banana", "Orange", "Apple", "Avocado", "Mango"];
console.log(fruits[3]);

var person1 = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 55, 
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person1.fullName());

// HTML Events
// 1 onchange 
// 2 onclick
// 3 onmouseover 
// 4 onmouseout
// 5 onkeydown
// 6 onload
