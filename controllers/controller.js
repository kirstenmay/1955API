const mongoose = require('mongoose');
const MongModels = require('../models/person');

const Person = MongModels.Person;
module.exports = {
    homePage: function(req, res) {
        Person.find()
            .then(persons => res.json(persons))
            .catch(err => res.json(err))
    },
    newPerson: function(req, res) {
        person = new Person;
        Person.create(person)
            .then(person => {
                person.name = req.params.name;
                person.save()
                res.redirect("/")
            })
            .catch(err => res.json(err))
    },
    removePerson: function(req, res) {
        Person.remove({ 'name': req.params.name })
            .then(() => res.redirect("/"))
            .catch(err => res.json(err))
    },
    showPerson: function(req, res) {
        Person.find({ 'name': req.params.name })
            .then(person => res.json(person))
            .catch(err => res.json(err))
    }
}