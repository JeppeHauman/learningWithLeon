//Cardgame called WAR
if(!localStorage.getItem('deckId'))
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    localStorage.setItem('deckId', data.deck_id)
  })

document.querySelector('.newDeck').addEventListener('click', getNewDeck)
function getNewDeck() {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('deckId', data.deck_id)
    })
}

document.querySelector('.draw').addEventListener('click', getFetch)
function getFetch(){
  fetch(`https://deckofcardsapi.com/api/deck/${localStorage.getItem('deckId')}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.player1Card').src = data.cards[0].image
        document.querySelector('.player2Card').src = data.cards[1].image
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

