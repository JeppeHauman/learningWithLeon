//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const apiKey = '?api_key=RkvuirMn6V1N8Jq5Ksm4oL4OEixzl4ou4lzOdFcL'
function getAPOD(){
    fetch('https://api.nasa.gov/planetary/apod' + apiKey)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.hdurl
        })
}

getAPOD()
