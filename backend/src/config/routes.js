const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.user('/api', router)
}

const todoService = require('../api/todo/todoService')
todoService.register(router, '/todos')