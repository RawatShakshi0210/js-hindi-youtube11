// Primitive data types = 7 types; it is called the call by value data type; String, Number ,
//  Boolean , null, undefined, Symbol,BigInt



//const score = 100
//const scoreValue = 100.3( these both are come in the number data type)

//const isLoggedIn = false(boolean data type)
//const outsideTemp = null(null data type)
//let userEmail = undefined;

//const id = Symbol('123')
//const anotherId = Symbol('123')
//console.log(id == anotherId);(result will be false);ye dekhne mai similar hai 
                                           //result false aarha h




//Non primitive data types(Refrence data type) = It is calledd the call by refrence data type
//Array, Object, Functions part of this refrence data type


const heros = ["shaktiman","nagraj","doga"];
let myobj ={
   name:"sakshi"
   age : 21,//(curly braces k jo andar hai vo object hote h unhe ham let obj krkebhi define kr skte hai)

}

const myFunction = function(){
   console.log("Hello world");
}
//myFunction ka datatype function hota hai

console.log(typeof bigNumber);//this line of code will use to find the types of operator of datatypes
                              //like bigNumber is the datatype of (number)


// https://262.ecma-international.org/5.1/#sec-11.4.3
//this link will help you to read the datatype in deep

//(JS is a dynamically typed language.because data type will automatically assigned at the time
//of compilation or code execution)

