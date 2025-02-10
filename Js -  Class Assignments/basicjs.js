let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
//console.log(a*b)
  return a * b;
}
console.log(x)

function add(a,b)
{
    return a+b;
}
a=5
b=7
console.log("The addition of ",a, " and  ", b, " is :", add(a,b))

add2 = (a,b) => {return a+b};
console.log("The addition by arrow funx of ",a, " and  ", b, " is :", add2(a,b))


// funx cnvertt degree celcious to faren height
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
let value = toCelsius(4);
console.log(value);
let text = "The temperature is " + toCelsius(77) + " Celsius";

//iife analysmus funx
console.log(text)

//Local Variables
function carname() {
    let carName = "Volvo";
    // code here CAN use carName
  console.log(carName)

  }
  // below carName cant be accessed outside funx
 // console.log(carName)
 //calling carname funx so i till perform all isndie things
 carname()
//Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
//Local variables are created when a function starts, and deleted when the function is completed.

//JavaScript Objects, obj  have properties 
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car)
console.log(car.type)
console.log(car.model)
// methods to create objects
// Create an Object - m1
const person = {
    firstName: "Adi",
    lastName: "kr",
    age: 50,
    eyeColor: "blue"
  };
  console.log(person)
// Create an Object m2
const person2 = {};

// Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
console.log(person2)
// Create an Object using new keyword
const person3 = new Object();

// Add Properties
person3.firstName = "Om";
person3.lastName = "Kar";
person3.age = 50;
person3.eyeColor = "neelkant";
console.log(person3)

