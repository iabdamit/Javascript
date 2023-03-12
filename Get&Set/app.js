class Animal{
    constructor(Name){
        this._name=Name
    }
    fly(){
        alert(`Animal ${this._name} is flying`)
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name=newName
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("eating carrot")
    }
}
let a= new Rabbit("Bat")
a.fly()
console.log(a.name)
a.name="Jake"
console.log(a.name)

let c=56 

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)