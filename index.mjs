import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('👋I am zara Welcome to my Express.js server')
})
app.get('/water', (req, res) => {
    res.send('here is your water 🌊')
})
app.get('/desert', (req, res) => {
    res.send('here is your desert 🏜️')
})

app.listen(8000, () => {
    console.log(`Hello server is listening at http://localhost:8000`)
})