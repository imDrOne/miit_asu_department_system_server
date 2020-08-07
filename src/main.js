require('dotenv').config()

const exress = require('express')
const app = exress()
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(PORT))
