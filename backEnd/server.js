const express = require('express')
const app = express()
const cors = require('cors')
require("dotenv").config();

app.use(express.json())


app.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", ['Content-Type', 'Authorization'])
    app.use(cors());
    next()
})


const router = require('./routes/Router')

const porta = process.env.PORTA
require('./db/conn')
app.use(router)
app.listen(porta, () => {
    console.log("ok rodando")
})