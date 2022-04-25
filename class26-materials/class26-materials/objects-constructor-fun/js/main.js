//Create a constructor with 4 properties and 3 methods

function MakePizza(size, toppings, crust, sauce) {
    this.size = size
    this.toppings = toppings 
    this.crust = crust
    this.sauce = sauce

    this.burnMouth = function() {
        console.log('Aauuii aauuiii')
    }

    this.cut = function() {
        console.log('slizzeeee')
    }

    this.toppings = function() {
        console.log(this.toppings)
    }
}
