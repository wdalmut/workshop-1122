const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => res.send('Ciao Mondo <h1>Ticket 1</h1>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
