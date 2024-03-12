//Scopes in functions
var avar = " somthing global";
afunc();
function afunc()
{
    document.write(avar + "<br/>");
    var avar = " somthing local";
    document.write(avar + " <br/>");
} 

//"this is function"
function global()
{
    document.write(this +"<br/>");
}
var o = {
    "local" : function()
    {
        document.write(this + this.x + "<br/");
    }
    , "x" : 10
};
global();
o.local();

//this
var student = {
    name :'Pham Van Phi',
    getName: function()
    {
        console.log(this.name);
        return this.name;
    }

};
var_deStudent = student.getName();

//scopes
var person1 = {
    name : 'Nhat Minh' , age: 12
};
var person2 = {
    name : 'Huu Trung' , age: 32
};
var sayHello = function(){
    alert('Hello, ' + this.name);
};
var sayGoodbye = function(){
    alert( 'Goodbye, '+ this.name);
};

sayHello();
sayGoodbye();

//Scope chain
function step1 (){
    var te = 2;
    console.log(te);
}

function step2 () {
 
    step1();
}
step2();
var te = " Glocal variables";

//Nested functions, scope
function fOuter(){
    var x = "Hello";
    function fInner(){
        x = "World";
    }
    fInner();
    return x ;
}
console.log(fOuter());

//Nested functions, scope
var myFunction = function (){
    var name  =  'Ha Thi';
    var myOtherFunction = function(){
        console.log('I am ' + name);
    };
    console.log(name);
    myOtherFunction();
};
myFunction();

//Closures
function outerF(){
    var x  = "World";
    function innerFsetX(val){
        x = val;
    }
    return innerFsetX;
}
var a = outerF();
a("Hello");
outerF();

//Closures scope
var sayBye = function (name) {
    var text = 'Bye, ' + name;
    return () => {
        console.log(text);
    }
}
sayBye( 'Me');
var calledMe = sayBye('Me');
calledMe();

//curry
function add(a,b,c)
{
    return a+b+c;
}

console.log(add(1,2,3));
function addCurries(a){
    return (b)  => {
        return(c)=> {
            return a+b+c;
        }
    }
}
console.log(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);
console.log(ad3);

//Constructors and “this"
document.write("<br\>")
class React {
     constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
     }
     calArea(){
        return this.w * this.h;
     }
}

const react     = new React(1,2,3,4);

const rect = new Rect(1, 2, 3, 4);
document.write(rect.constructor.name + ": " + rect.constructor.prototype + ": " + rect.calcArea() + "<br/>");

const rect2 = new Rect(1, 2, 3, 4);
document.write(rect2.constructor.name + ": " + rect2.constructor.prototype + ": " + rect2.calcArea() + "<br/>");

document.write(window.calcArea() + "<br/>");

//trang50
 function Car() {
    Car.prototype = {
        constructor:Car,
        speed:0,
        printSpeed: function(){
            console.log(this.speed + '<br/>');
        }
    }
}

var car = new Car();
car.instanceMethod = function(){
    console.log('An instance method <br/>');
};
car.speed = 50;
car.printSpeed();
car.instanceMethod(); 

car.speed = 50;
car.printSpeed();
car.instanceMethod();

function Cabriolet(){}

Cabriolet.prototype = new Car();
Cabriolet.prototype.topState = 'closed';
Cabriolet.prototype.openTop = function(){
    this.topState = 'opened';
    console.log('Top '+ this.topState);
}
Cabriolet.prototype.closeTop = function(){
    this.topState = 'closed';
    console.log('Top '+ this.topState);
}

var cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();

function TeslaCabriolet(){}
TeslaCabriolet.prototype = new Cabriolet();
TeslaCabriolet.prototype.name = 'Tesle http....';
TeslaCabriolet.prototype.sayName = function(){
    console.log(this.name);
}

var tesla =  new TeslaCabriolet();
tesla.openTop();
tesla.sayName();
