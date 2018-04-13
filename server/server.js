const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const hc = require('./house_controller')
const port = process.env.PORT || 3000

const app = express()

app.use(express.static(__dirname + '/../build'))

app.use(bodyParser.json())

app.get('/api/houses', hc.getAll)

app.get('/api/house/:id', hc.getAll)

app.delete('/api/house/:id', hc.demolish)

app.post('/api/house', hc.buildAHome)


massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db', db)
    
    app.listen(port, () => {
        console.log(`We up and at it baby! Port ${port}, running smooth.`)
    })
})





