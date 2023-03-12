//! in javascript all the declaration of functions, variables or classes moves to the top of their scope, prior to execution of the code
//! function expression does not hoisted means functions like const m =function(){}
//* Example 1
// greet() //* this donot show any error

// function greet(){
//     console.log("good morning")
// }

//* Example 2
console.log(a)
var a=5;  //declaration hoisted to the top but initialization is not
console.log(a)