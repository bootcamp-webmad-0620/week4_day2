const express = require('express')
const port = 3000

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/home-page.html'))
app.get('/cat', (req, res) => res.sendFile(__dirname + '/views/cat-page.html'))

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`))