// try{
// abd
// }catch(error){
//     //! error objects
// console.log(error.name)
// console.log(error.message)
// }

//! custom error 

try{
    let age=prompt("Enter your age ")
    age=Number.parseInt(age)
    if(age>150){
    throw new ReferenceError(`This is probably not true age = ${age}`)
    }  
}
catch(error){
console.log(error.name)
console.log(error.message)
console.log(error.stack)
}
console.log("The script is still running")