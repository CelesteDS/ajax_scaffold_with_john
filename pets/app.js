const express = require('express')
const bodyParser = require('body-parser')
const { getPetsAndSpecies, updatePetName } = require('./db/db.js')


const app = express()


app.set('view engine', 'pug')
app.use(express.static('public'))


app.get('/', (req, res) => {
  getPetsAndSpecies()
    .then((pets) => {
      res.render(
        'pets',
        { pets }
      )
    })
    .catch(console.error)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/update/:petId', (req, res) => {
  updatePetName(req.params.petId, req.body.newName)
    .then((result) => {
      res.send(result)
    })
    .catch(console.error)
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)
