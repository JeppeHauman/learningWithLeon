//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name){
        this.name = name
    }

    speak() {
        console.log(`${this.name} is SPEAKING!?`)
    }
}

class Cat extends Animal {
    constructor(name, catBreed){
        super(name)
        this.catBreed = catBreed
    }
}

class Cow extends Animal {
    constructor(name, weight) {
        super(name)
        this.weight = weight
    }
}

let muuuh = new Cow('Muuuh', 600)
let choko = new Cat('Choko', 'Indoor thing')

