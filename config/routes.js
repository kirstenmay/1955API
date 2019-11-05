const controller = require('../controllers/controller');

module.exports = app => {
    app.get('/', controller.homePage);
    app.get("/new/:name", controller.newPerson);
    app.get("/remove/:name", controller.removePerson);
    app.get("/:name", controller.showPerson);
}