//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(make, model, color, weight){
        this.make = make
        this.model = model
        this.color = color 
        this.weight = weight
    }

    makeEspresso(){
        console.log('Brrrrrr')
    }

    grind(){
        console.log('Bbbrr different')
    }

    clean(){
        console.log('Also goes bbbrrr')
    }
}