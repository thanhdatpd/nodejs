const express = require('express')
const route = express.Router()
const usercontroller = require('../controller/UserController')



route.get('/users/:id', usercontroller.middlewareGetUser, usercontroller.getUserById)
route.get('/allusers', usercontroller.middlewareGetAll, usercontroller.allUsers)
route.post('/isexist', usercontroller.middlewareIsExist, usercontroller.isExist)
route.post('/newuser', usercontroller.middlewareCheckExist, usercontroller.newUser)
route.post('/deleteuser/:id', usercontroller.middlewareDelete, usercontroller.deleteUser)

route.get('/time', async (req, res) => {
    res.json({
        message: 'ok',
        result: Date.now()
    })
})

module.exports = route