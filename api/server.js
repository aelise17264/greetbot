const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.status(200).json({hello: 'node 34'})
})

module.exports = server