const Todo = require('../models/Todo')


class TodolistConttroller {
    // [GET] /
    index(req, res, next){
        Todo.find({})
            .then((todolist) => res.send(todolist))
            .catch(next)
    }
    // [GET] /create
    create(req, res, next){

    }
    // [POST] /store
    store(req, res, next){

        const todo = new Todo(req.body)
        todo.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }
    // [GET] /:id/edit
    edit(req, res, next){

    }
    // [PUT] /:id
    update(req, res, next){
        Todo.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(next) 
    }
    // [DELETE] /:id
    destroy(req, res, next){

        Todo.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/'))
            .catch(next)
    }
}

module.exports = new TodolistConttroller