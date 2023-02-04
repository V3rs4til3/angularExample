let express = require('express');
let router = express.Router();

const totoController = require('./controllers/totoController');
const authController = require("./controllers/authController");
const {isAuthenticated} = require("./middleware/userMiddleWare");

router
    .route('/')
    .get(isAuthenticated, totoController.getAllToto)
    .post(totoController.addToto);
router
    .route('/register')
    .post(authController.register);
router
    .route('/login')
    .post(authController.login);

module.exports =  router ;