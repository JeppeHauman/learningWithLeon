//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.size = 'standard'
pizza.toppings = ['cheese', 'peperoni', 'jalapenos']
pizza.shape = 'rectangle'
pizza.cheese = true

pizza.cut = function() {
    console.log('8 nice slices for you')
}

pizza.heat = function(){
    console.log('Its hawt')
}

pizza.whatToppings = function(){
    pizza.toppings.forEach(top => {
        console.log(top)
    })
}
