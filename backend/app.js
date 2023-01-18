const http = require('http')
const express = require('express')

const app = express()
const httpServer = http.createServer(app)

app.get('/', (req, res) => res.json({ msg: 'OK' }))

app.get('/env', (req, res) => {
    const { env } = process
    res.json({ env })
})

const PORT = process.env.EXPRESS_PORT || 3000
httpServer.listen(PORT, () => console.log('Server started.'))