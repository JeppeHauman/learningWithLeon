//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const isbn = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
        if(localStorage.getItem('books')){
          let books = localStorage.getItem('books') + " ; " + data.title
          localStorage.setItem('books', books)       
        } else {
          localStorage.setItem('books', data.title)
        }
        document.querySelector('h2').innerText = localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

