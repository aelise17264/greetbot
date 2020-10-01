const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.status(200).json({hello: 'node 3'})
})

module.exports = server