console.log(document.cookie)
document.cookie="name = abd 99"
document.cookie="name2 = abd 991"
document.cookie="name2 = abd"
let key=prompt("enter your key")
let value=prompt("enter your value")
//! using encodeURIComponent we can use special key world also and we can get them using decodeURIComponents 
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
decodeURIComponent(document.cookie)