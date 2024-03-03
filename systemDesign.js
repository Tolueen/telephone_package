//for the telphone package
class Telephone {
    constructor(){
        this.observers = new Set();
    }

    //the methods for my telephone class
    addNumber(observer){
        this.observers.add(observer)
        

    }
    deleteNumber(observer){
        this.observers.delete(observer)
     
    }
    dialNumber(context){
        for (let observer of this.observers){
            observer.update(context)
        }
    }
}

//for the observers phone number;


class observerNumber {
    constructor(number){
        this.number = number;
    }
    update(context){
        console.log(`${this.number}`);
        console.log(`${this.number} has been added`);
        console.log("Now Dialing 2347023232")
        console.log(`${this.number} has been deleted`);
        console.log(`\n**********************************\n`)
        
    }
}

//creating instances of telephone
const telephone = new Telephone ();

//instances of phone numbers
const phoneNumber1 = new observerNumber ("+144745364625");
const phoneNumber2 = new observerNumber ("+2348060811520");
const phoneNumber3 = new observerNumber ("08060811520");

//add phonenumbers to Telephone
telephone.addNumber(phoneNumber1);
telephone.addNumber(phoneNumber2);
telephone.addNumber(phoneNumber3);

//delete phone number
telephone.deleteNumber(phoneNumber3);

//dial phoneNumber 
telephone.dialNumber(phoneNumber3);