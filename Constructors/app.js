class RailwayForm{
    constructor(Name,TrainNumber,Address){
        console.log("Constructor called..." + Name +" " + TrainNumber)
        this.name=Name
        this.trainNo=TrainNumber
        this.address=Address
    }
    
    preview(){
        alert( "your form for train no. " + this.trainNo + " and your address is "+ this.address)
    }

    submit(){
        alert( this.name + " your form is Submitted for train no. is " + this.trainNo)
    }

    cancel(){
        alert( this.name + " your form is cancelled for train no. is " +this.trainNo)
        this.trainNo=0
    }
}

let abdForm=new RailwayForm('ABD',13452,'h no. 434, NY,Sakha Republic ,Siberia - 879868')

abdForm.preview()
abdForm.submit()
abdForm.cancel()
abdForm.preview()