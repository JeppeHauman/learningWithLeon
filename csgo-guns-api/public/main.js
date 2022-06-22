const deleteText = document.querySelectorAll('.fa-trash')

Array.from(deleteText).forEach(element => {
    element.addEventListener('click', deleteGun)
})

async function deleteGun() {
    const gName = this.parentNode.innerText.split(' ')[0]
    try {
        const response = await fetch('deleteGun', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'gunNameS': gName
        })
    })
    const data = await response.json()
    console.log(data)
    location.reload()

    } catch(err) {
        console.log(err)
    }
}
