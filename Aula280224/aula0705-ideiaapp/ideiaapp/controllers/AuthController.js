const User = require('../models/User')
 const bcrypt = require('bcrypt')

 module.exports = class UserController{
    static login(req, res){
        res.render('auth/login')
    }
 }