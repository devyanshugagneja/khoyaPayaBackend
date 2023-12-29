const express = require('express')
const app = express()
const{signup,login}=require("../controller/userController")
app.use("/user", userRouter)

userRouter.route('/signup')
    .post(signup)

userRouter.route('/login')
    .post(login)



module.exports = userRouter;