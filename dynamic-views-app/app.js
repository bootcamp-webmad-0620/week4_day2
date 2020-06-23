const express = require('express')
const port = 3000

const app = express()

app.use(express.static('public'))

// Necesario para trabajar con vistas dinámicas
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    let data = {
        name: "Germán",
        surname: "Álvarez",
        bootcamp: "IronHack <strong>Web Development</strong> Boot",
        city: "Madrid",
        amount: 7000,
        payed: true,
        address: {
            street: 'García Luna',
            code: 28002
        },
        skills: ['Pure JS', 'Backend', 'SPA'],
        personalInfo: {
            age: 33,
            celiac: false,
            children: 0
        }
    }

    res.render('index', data)
})

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`))