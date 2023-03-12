//! one liner  arrow function
const sayHello= name =>console.log(`Hello ${name}`)
sayHello("ABD")

//! normal arrow function
// const SayHello= (name) =>{
// console.log(`Hello ${name}`)
// }
// SayHello("ABD")

//* for more than one variable brackets are must

const Hello= (name,greeting) =>console.log(`${greeting} ${name}`)
const x={
    name:"ABD",
    role:"JS Devloper",
    exp:30,
    show:function(){
        setTimeout(()=>{
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        },2000)
    }
}
x.show()