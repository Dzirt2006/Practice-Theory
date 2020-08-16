let str = "Hello";

str.test = 5; // creates a test property in the temporary wrapper object

let arr=[0,2,3]
delete arr[1]

//--------------------------------------------------------------bind vs call-------------------------------------------------------------------------------------

function getMonthlyFee(fee){
    var remaining = this.total - fee;
    this.total = remaining;
    return this.name +' remaining balance:'+remaining;
}
var rachel = {name:'Rachel Green', total:500};


//bind
var getRachelFee = getMonthlyFee.bind(rachel,90);
// //deduct
// console.log(getRachelFee());//Rachel Green remaining balance:410
// console.log(getRachelFee());//Rachel Green remaining balance:320
// console.log(getMonthlyFee.call(rachel,90));

//--------------------------------------------------------------------------------

var logProp = function(prop) {
    console.log(this[prop]);
};
//Now, let's take an object that looks like this :

var Obj = {
    x : 5,
    y : 10
};
//We can bind our function to our object like this :

Obj.log = logProp.bind(Obj);
//Now, we can run Obj.log anywhere in our code :

// Obj.log('x'); // Output : 5
// Obj.log('y'); // Output : 10

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//OBJECT

const person={}

person['alex']='pavlov'

// console.log(person)


var car = new Object();
car.colour = 'red';
car.wheels = 4;
car.hubcaps = 'spinning';
car.age = 4;
 //same as
var car2 = {
    colour:'red',
    wheels:4,
    hubcaps:'spinning',
    age:4
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CLOSURE



function init() {
    var name = 'Mozilla'; // name is a local variable created by init
   return function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }

}
// init()();

//private closure

var counter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function() {
            changeBy(1);
        },

        decrement: function() {
            changeBy(-1);
        },

        value: function() {
            return privateCounter;
        }
    };
}();

// console.log(counter.value());  // 0.
//
// counter.increment();
// counter.increment();
// console.log(counter.value());  // 2.
//
// counter.decrement();
// console.log(counter.value());  // 1.

////////////////////closure chain
// global scope
var e = 10;
function sum(a){
    return function(b){
        return function(c){
            // outer functions scope
            return function(d){
                // local scope
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
    return function sum2(b){
        return function sum3(c){
            // outer functions scope
            return function sum4(d){
                // local scope
                return a + b + c + d + e;
            }
        }
    }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
// console.log(s3) //log 20



//-------------------------------------------------------------------------------------------------------High Order func-----------------------


// With Higher-order function map
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
    return item * 2;
});
// console.log(arr2);
const arrasd = [5, 7, 1, 8, 4];
const summ = arrasd.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
// prints 25
// console.log(sum);
//--------------------------------------------------------------------------------------------------------------------------Pure finctions-------------------

//pure
function priceAfterTax(productPrice) {
    return (productPrice * 0.20) + productPrice;
}

//impure
var tax = 20;
function calculateTax(productPrice) {
    return (productPrice * (tax/100)) + productPrice;
}


//--------------------------------------------------------------------------------------------------------------------------deep copy-------------------




const nestedArray = [['😉'],['😊'],['😇']]
const nestedCopyWithSpread = [...nestedArray]

nestedArray[0][0] = '😡' // Whoops, a bug

// console.log(...nestedArray) // ["😡"] ["😊"] ["😇"]
// console.log(...nestedCopyWithSpread) // ["😡"] ["😊"] ["😇"]

// This is a hack to make a deep copy that is not recommended because it will often fail:
const nestedCopyWithHack = JSON.parse(JSON.stringify(nestedArray)) // Make a deep copy
nestedCopyWithHack[0][0] = '😉' // Only this copied array will be changed

// console.log(...nestedArray) // ["😡"] ["😊"] ["😇"]
// console.log(...nestedCopyWithSpread) // ["😡"] ["😊"] ["😇"]
// console.log(...nestedCopyWithHack) // ["😉"] ["😊"] ["😇"]



//--------------------------------------------------------------------------------------------------------------------------factory  func vs construction func-------------------

//factory return new obj
function person1(firstName, lastName, age) {
    const person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
}



//construction

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
const mike = new Person('mike', 'grand', 23);



//------------------------------------------------------------------------------------------------------------------------classes---------------------------

//static methods
class Car1 {
    constructor(brand) {
        this.carname = brand;
    }
    static hello() {
        return "Hello!!";
    }
}

mycar3 = new Car1("Ford");

//Call 'hello()' on the class Car:
// document.getElementById("demo").innerHTML = Car1.hello();

//and NOT on the 'mycar3' object:
//document.getElementById("demo").innerHTML = mycar3.hello();
//this would raise an error.


///////INHERITANCE
class Car2 {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car2 {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

mycar1 = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = mycar.show();

// SET GET
class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

mycar = new Car("Ford");
mycar.carname = "Volvo";
// document.getElementById("demo").innerHTML = mycar.carname;






























