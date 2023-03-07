const SessioModel = require('../database/sessiot')
const {v4} =  require('uuid')

const createNewAuth =async ()=>{
    let auth = v4()
    let unique = "ASD"

    while(unique!==null){
        auth = v4()
        unique=await SessioModel.findOne({auth:auth})
    }

    return auth

}

const checkIfAuthOk = async (auth)=>{ //lisää autorisoinnin vanhentuminen 

    let ok = await SessioModel.findOne({auth:auth})
    ok?ok=true:ok=false
    return ok
}

const checkAndSetSessionId = async(req,res,next) =>{
    let auth = req.get('authorization')


    let newAuth

    let ok = await checkIfAuthOk(auth) 
    if(ok){
        res.cookie('auth',auth)
        console.log("\n");
        console.log("—————————————————————");
        console.log("Auth ok");
        console.log("—————————————————————");
        console.log("\n");
        next()
        return;
    }

    try {
        
        newAuth = await createNewAuth()
    } catch (error) {
        res.status(404).send()
        return
    }


    res.cookie('auth',newAuth)

    await SessioModel.create({auth:newAuth, ostoskori:"{}"})

    next()
}

const checkIfSessionExists =async(req,res,next)=>{
    next()
}



module.exports = {checkAndSetSessionId,checkIfSessionExists}




