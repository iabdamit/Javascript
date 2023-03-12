class RailwayForm{
    submit(){
        alert( this.name + " your form is Submitted for train no. is " + this.trainNo)
    }
    cancel(){
        alert( this.name + " your form is cancelled for train no. is " +this.trainNo)
    }
    fill(Name,TrainNumber){
        this.name=Name
        this.trainNo=TrainNumber
    }
}
//! Create a from for abd
let abdForm=new RailwayForm()
//! filling form for abd
abdForm.fill("ABD",22003)
//! Create a from for rohan
let rohanForm1=new RailwayForm()
//! filling form for rohan
rohanForm1.fill("Rohan",23004)
let rohanForm2=new RailwayForm()
rohanForm2.fill("Rohan",22804)
abdForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()