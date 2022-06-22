const express = require('express')
const app = express()
const cors =  require('cors')
const { response } = require('express')
const PORT = 8001
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'guns'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} database`)
        db = client.db(dbName)
    })
    .catch(error => console.log(error))

app.get('/', (req,res) => {
    db.collection('csgo-guns').find().sort().toArray()
    .then(data => {
        res.render('index.ejs', {info: data})
    })
    .catch(error => console.error(error))
})

app.post('/addGun', (req,res) => {
    db.collection('csgo-guns').insertOne({gunName: req.body.gunName})
    .then(result => {
        console.log('Gun added')
        res.redirect('/')
    })
    .catch(error => console.error(error))
})

app.delete('/deleteGun', (req,res) => {
    db.collection('csgo-guns').deleteOne({gunName: req.body.gunNameS})
    .then(result => {
        console.log('Gun deleted')
        res.json('Gun deleted')
    })
    .catch(error => {
        console.error(error)
    })
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})