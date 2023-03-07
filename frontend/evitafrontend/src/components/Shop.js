/* eslint-disable */ 

import Tuote from "./Tuote"
import { useEffect } from "react";
import tuotteet from "../dummyData/tuotteet";
import { useDispatch } from 'react-redux'
import { connect } from "react-redux"


const Shop = ()=>{

    useEffect(()=>{
        window.scrollY>800?window.scrollTo(0,800):console.log("nada");
      },[])

    

    return(
        <div className="Shop">
            {
                tuotteet.map(tuote=><Tuote key={tuote.nimi} tuote={tuote}/>)
            }
            
        </div>
    )
}

export default Shop