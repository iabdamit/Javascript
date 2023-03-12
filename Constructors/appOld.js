class RailwayForm{
    constructor(Name,TrainNumber){
        console.log("Constructor called..." + Name +" " + TrainNumber)
        this.name=Name
        this.trainNo=TrainNumber
    }
    submit(){
        alert( this.name + " your form is Submitted for train no. is " + this.trainNo)
    }
    cancel(){
        alert( this.name + " your form is cancelled for train no. is " +this.trainNo)
    }
}
//* Create and fill for abd 
let abdForm=new RailwayForm("ABD",22003)
//* Create  and fill for rohan
let rohanForm1=new RailwayForm("Rohan",23004)
let rohanForm2=new RailwayForm("Rohan",22804)
abdForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()