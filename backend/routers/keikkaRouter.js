const keikatRouter = require('express').Router()
const keikatModel = require('../database/keikat')


/*hae kaikki keikat*/
keikatRouter.get("/keikat",async(req,res)=>{
    //const result = await Keikka.find({})
    //res.status(200).send(result)

    const response = await keikatModel.find({}, {_id:0, __v:0})

    res.send(
        response
    )
})

/*lisää keikka*/

keikatRouter.post("/keikka", async (req,res)=>{
    let keikkaToAdd=false


    try{
        keikkaToAdd={
            aika:req.body.aika,
            kaupunki:req.body.kaupunki,
            keikkapaikka:req.body.keikkapaikka,
            maps:req.body.maps,
            liput:req.body.liput
        }
    } catch (error) {
        keikkaToAdd=false
        console.log("error");
    }
    
    let response = false
    if(keikkaToAdd){
        response = await keikatModel.create(keikkaToAdd)
    }
    response===false?res.status(501).send("error"):res.send(response)

})

module.exports =keikatRouter