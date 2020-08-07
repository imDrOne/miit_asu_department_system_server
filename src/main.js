require('dotenv').config()

const exress = require('express')
const app = exress()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const PORT = process.env.PORT || 4000

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello!'))
app.listen(PORT, () => console.log(PORT))
