//alert("hello")
//! console methods
// console.log(console)

//!assert

// console.assert(555>559)//* gives Assertion failed
// console.assert(555>55)
//!table

// obj={
//     a:1,
//     b:2,
//     c:3
// }
// console.table(obj)

//!warn
// console.warn("Hay please donnot drink")

//!error
// console.error("wrong answer")

//! info
// console.info("this is important information")

//! time
// console.time("a")
// console.timeEnd('a')

// todo : Alert , Prompt ,Confirm

// alert(" Enter the value of a ")
// let a=prompt("Enter the value of a ","555")//* 555 is a default value
// a=Number.parseInt(a)
// alert(`you entered 'a' of type = ${typeof a}`)
// let write=confirm(" DO you want to write in dcoument ")
// if(write){
//     document.write(a)
// }
// else{
//     document.write("plese allow me to write ")
// }

//todo : window,BOM,DOM
// console.log(window)
// console.log(document.body)
// document.body.style.background="orange"

//! ques 1

// let runAgain=true;
//  //* Arrow function
// const canDrive=(age)=>{
// return age>= 18 ? true : false
// }
// while(runAgain){
// let age=prompt("enter your age ")
// age=Number.parseInt(age)
// if(age<0){
//     console.error("Please enter a valid age ")
//     break;
// }

// if(canDrive(age)){
//     alert('Yes you can drive')
// }
// else{
//     alert("you cannot drive ")
// }
// runAgain=confirm(" Do you want to play again ? ")
// }

//! ques 2

// let number=prompt("Enter the number ")
// number=Number.parseInt(number)

// if(number>4){
// location.href="https://google.com " 
// }

//! ques 3 

let color=prompt(" Enter the page background color ")
document.body.style.background=color

