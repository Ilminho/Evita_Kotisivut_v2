const express = require('express')
const app = express()
const port = 3001
const keikatRouter = require("./routers/keikkaRouter")
const sessioRouter = require("./routers/sessioRouter")
const cookieParser = require("cookie-parser")
const {requestLogger, bodyChecker} = require('./middleware/loggers')
const {checkAndSetSessionId, checkIfSessionExists} =require('./middleware/authorization')
 
app.use(express.json())
app.use(cookieParser())

app.use((req,res,next)=>{
    console.log("\n\n");
    console.log("################--NEW REQ NEW REQ--##########################");
    console.log("\n");
    next()
})

app.use([checkAndSetSessionId,checkIfSessionExists])
app.use(requestLogger)
app.use(bodyChecker)

app.use(keikatRouter)

app.use(sessioRouter)

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log("Hello");
})