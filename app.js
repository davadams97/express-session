const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('This is a test message confirm express server is running!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})