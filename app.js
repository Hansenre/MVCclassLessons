const express = require('express');
const usersRouter = require('./src/routes/usersroutes');
const app = express();

app.use('/users', usersRouter);

app.listen(5000, ()=>{
    console.log("Server is Running!")
})

