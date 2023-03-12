//! Desturucturing
let arr=[3,5,8,9,12,14]
//*normal one
//let a=arr[0]
//let b=arr[1]
// let[a,b,c,d,...rest]= arr
// console.log(a,b,c,d,rest)
// let[a, ,b,...rest]= arr
// console.log(a,b,rest)
let{a,b}= {a:1,b:5}
//console.log(a,b)

//! spread Operator
let arr1=[3,5,8]
let obj1={...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3
}

console.log(sum(...arr1))

let obj2={
    name:"Harry",
    company:"Compamy xyz",
    Address:"xyz",
}
console.log({...obj2,name:"John",Compamy:"ABC"})
console.log({name:"John",Compamy:"ABC",...obj2})
