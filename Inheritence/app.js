class Animal{
    constructor(Name,Color){
        this.name=Name
        this.color=Color
    }
    run(){
        console.log(`${this.name} is running`)
    }

    shout(){
        console.log(`${this.name} is shouting`)
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(`${this.name } is eating banana `)
    }
    hide(){
        console.log(`${this.name } is hiding`)
    }
}

let ani=new Animal (" Bruno ","White ")
let m=new Monkey("Chimpu","Orange")

ani.shout()
m.eatBanana()
m.hide()
//*  ani.hide()  this shows error