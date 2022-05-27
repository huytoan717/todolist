const express = require('express')
const router = express.Router()

const todoController = require('../app/controllers/TodoController')

router.post('/store', todoController.store)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.destroy)
router.get('/', todoController.index)



module.exports = router
