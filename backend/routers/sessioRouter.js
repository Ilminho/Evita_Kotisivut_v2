const sessioRouter = require('express').Router()
const SessioModel = require('../database/sessiot')

sessioRouter.get("/sessio/:id", async (req,res)=>{
    const response = await SessioModel.findOne({auth:req.params.id},{ostoskori:1, _id:0})

    response?.ostoskori?
    res.send(JSON.parse(response.ostoskori)):
    res.send({})
})

sessioRouter.post("/sessio",async (req,res)=>{

    const dummy = {nimi:"Evita EP",tyyppi:"CD",hinta:15,kuva:"../images/Evita  sinkun kansi 1.jpg", maara:1}

    const response = await SessioModel.create({auth:"xxx",ostoskori:JSON.stringify(dummy)})
    res.send(JSON.parse(response.ostoskori))
})

sessioRouter.put("/sessio/:id", async (req,res)=>{
    let ostoskori = req.body.ostoskori?
    JSON.stringify(req.body.ostoskori):
    false

    if(!ostoskori){
        res.send("Cannot update ostoskori")
        return
    }

    const response = await SessioModel.updateOne({auth:req.params.id},{$set: {"ostoskori":ostoskori}})

    res.send(response)
})

module.exports=sessioRouter 