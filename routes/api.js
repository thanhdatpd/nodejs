const express = require('express')
const route = express.Router()
const usercontroller = require('../controller/UserController')



route.get('/users/:id', usercontroller.getUserById)
route.get('/allusers', usercontroller.allUsers)
route.post('/isexist', usercontroller.isExist)
route.post('/newuser', usercontroller.newUser)
route.post('/deleteuser/:id', usercontroller.deleteUser)

route.get('/time', async (req, res) => {
    res.json({
        message: 'ok',
        result: Date.now()
    })
})

module.exports = route