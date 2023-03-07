const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const keikatRouter = require("./routers/keikkaRouter")
const sessioRouter = require("./routers/sessioRouter")
const cookieParser = require("cookie-parser")

app.use(cors({
    origin:"*"
}))
const {requestLogger, bodyChecker} = require('./middleware/loggers')
const {checkAndSetSessionId, checkIfSessionExists} =require('./middleware/authorization')
app.use(express.json())
app.use(cookieParser())

app.use((req,res,next)=>{
    console.log("\n\n");
    console.log("################--NEW REQ NEW REQ--##########################");
    console.log("\n");
    console.log(req.cookies);
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