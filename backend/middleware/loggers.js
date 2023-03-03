const requestLogger = (req,res,next)=>{

    console.log("\n");
    console.log("-------REQUESTLOGGER----------");
    console.log("Method:" +req.method);
    console.log("Body:" +req.body);
    console.log(req.body);
    console.log("Path:" +req.path);
    console.log("——————————————————————————————");
    console.log("\n");

    next()
}

const bodyChecker = (req,res,next)=>{
    if(req.method==="POST"||req.method==="PUT"){
        console.log(Object.keys(req.body).length);
        Object.keys(req.body).length>0?next():res.status(404).send("No body")
        return
    }

    next()

}



module.exports = {requestLogger,bodyChecker}