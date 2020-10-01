const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.status(200).json({ environment: 'NODE_ENV'})
})

module.exports = server