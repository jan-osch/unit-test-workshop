const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/user', (req, res) => {

    console.log(req.body.name)
    if (!req.body.name) {
        return res.status(400).json({ error: ' name param is missing' })
    }

    return res.status(201).json({ name: req.body.name, id: 1 })
})

module.exports = app
