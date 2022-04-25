//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s='

document.querySelector('button').addEventListener('click', getDrink)
let counter = 0
function getDrink() {
    let userInput = document.querySelector('input').value
    fetch(url+userInput)
        .then(res => res.json())
        .then(data => {
            document.getElementById('ingredients').innerHTML = ''
            console.log(data.drinks)
            console.log(counter)
            document.querySelector('h2').innerText = data.drinks[counter].strDrink
            document.querySelector('img').src = data.drinks[counter].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[counter].strInstructions
            let ul = document.getElementById('ingredients')
            for(let i = 1; i < 16; i++){
                let measure = "strMeasure" + i
                let ingredient = "strIngredient" + i
                if(data.drinks[counter][measure] && data.drinks[counter][ingredient]){
                    let li = document.createElement('li')
                    li.appendChild(document.createTextNode(data.drinks[counter][measure] + data.drinks[counter][ingredient]))
                    ul.appendChild(li)
                } else if(data.drinks[counter][ingredient] && !data.drinks[counter][measure]) {
                    let li = document.createElement('li')
                    li.appendChild(document.createTextNode(data.drinks[counter][ingredient]))
                    ul.appendChild(li)
                } else if(data.drinks[counter][measure] && !data.drinks[counter][ingredient]) {
                    let li = document.createElement('li')
                    li.appendChild(document.createTextNode(data.drinks[counter][measure]))
                    ul.appendChild(li)
                }
                
            }
            if(counter < data.drinks.length -1) {
                counter++
            } else {
                counter = 0
            }
        })
    
        .catch(err => {
            console.log(`error ${err}`)
        })
    
}


