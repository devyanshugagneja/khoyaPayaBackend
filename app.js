const express = require('express')
const app = express()
const adharModel=require('./models/adharModel');
const userModel=require('./models/userModel');
const adharRouter=require('./routes/adharRouter');
const userRouter=require('./routes/userRouter');
app.use(express.json());
app.listen(3000)

app.use("/adhar", adharRouter);
app.use("/use", userRouter);