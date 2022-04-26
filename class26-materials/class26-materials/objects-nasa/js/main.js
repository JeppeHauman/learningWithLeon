//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const apiKey = '?api_key=RkvuirMn6V1N8Jq5Ksm4oL4OEixzl4ou4lzOdFcL'
const url = 'https://api.nasa.gov/planetary/apod'
function getAPOD(){
    fetch('https://api.nasa.gov/planetary/apod' + apiKey)
        .then(res => res.json())
        .then(data => {
            document.querySelector('img').src = data.hdurl
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
        })
}

document.querySelector('button').addEventListener('click', getAPODWithDate)
function getAPODWithDate(){
    let userDate = document.querySelector('input').value
    fetch(url + apiKey + '&date=' + userDate)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.hdurl
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error: ${err}`)
        })
}

getAPOD()
