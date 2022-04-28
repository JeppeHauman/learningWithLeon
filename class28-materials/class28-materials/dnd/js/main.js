//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data);
          let subClasses = data.subclasses
          subClasses.forEach(element => {
              document.querySelector('h4').innerText += ` ${element.name}`
          });
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

