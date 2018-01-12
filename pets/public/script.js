//press return and update db via AJAF
const updatePet = function() {
  const id = this.id
  fetch(`/update/${id}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ newName: this.value })
  }).then((result) => {
    return result.json() })
    .then((result) => {
      document.getElementById('output-message').innerHTML = result.message
  })
}


const pets = document.getElementsByClassName('pet-name')

for( let i = 0; i < pets.length; i ++) {
  pets.item(i).addEventListener('change', updatePet)
}
