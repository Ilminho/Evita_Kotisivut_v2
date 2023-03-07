import { connect, useDispatch } from "react-redux"
import { addTuote, removeAll, plusOne, minusOne, poistaYksi } from "../reducers/ostoskoriReducer";
import "../App.css"
import DivLine from "./DivLine";
import { useState } from "react";
import Vahvista from "./Vahvista";



/* eslint-disable*/


const Ostoskori =(props)=>{
    const dispatch = useDispatch()

    const [vahvista, setVahvista] = useState(false)

    const changeVahvista = ()=>{
        setVahvista(!vahvista)
    }



    const tyhjennaOstoskori=()=>{
        window.confirm("Haluatko tyhjentää ostoskorin?")?dispatch(removeAll()):console.log("Ei");
    }

    const poistaTuote=(id)=>{
        window.confirm("Poistetaanko tuote?")?dispatch(poistaYksi(id)):console.log("JK");
    }

    const lisaaYksiTuote=(id)=>{
        
        dispatch(plusOne(id))
    }

    const vahennaYksiTuote=(id,maara)=>{
        maara<1?poistaTuote(id):dispatch(minusOne(id))  
    }


    return(
        <div className="OstoskoriWrapper">

            <h1>OSTOSKORI</h1>

            {props.ostoskori?.length<1?"Ostoskorisi on tyhjä":
                props.ostoskori.map((tuote,index)=>
                <div key={index+"ostoskori"} className="Ostoskori_Ostos">
                    <img src={tuote.kuva} className="OstoskoriKuva"></img>
                    <span className="Ostoskori_Tuotetiedot">
                        <div>
                        <b>{tuote.nimi},  </b>
                        <b>{tuote.tyypit}: {tuote.tyyppi}</b>
                        </div>
                         
                        <div>
                            <span className="MaaraSpan">             
                                <button className="VahButton" onClick={()=>vahennaYksiTuote(index,tuote.maara)}>-</button>
                                {tuote.maara} 
                                <button className="LisaaButton" onClick={()=>lisaaYksiTuote(index)}>+</button>
                            </span>
                        </div>
                    </span>

                    <span className="ostoskori_Hinta">
                        <b>Kappalehinta: {tuote.hinta} {tuote.hinta>1?"euroa":"euro"}</b>
                    </span>

                </div>
                )
            }

            <div className="KaikkiOstokset">
                <h2>Ostoskori yhteensä:</h2>
                <h3>{props.ostoskori.reduce((p,c)=>p+c.maara*c.hinta,0)}e</h3>
            </div>

            <DivLine/>
            <button className="tyhjennaButton" onClick={tyhjennaOstoskori}>Tyhjennä ostoskori</button> 

            <DivLine/>

            <button className="tyhjennaButton" onClick={changeVahvista}>Vahvista ja maksa</button>


            {vahvista?<Vahvista sulje={changeVahvista}/>:""}
            

            


        </div>
    )
}

const mapStateProps = (state)=>{
    return{
      ostoskori:state.ostoskori
    }
}

const dispatchProps = {
  addTuote,
  removeAll
}

const ConnectOstoskori = connect(mapStateProps, dispatchProps)(Ostoskori)

export default ConnectOstoskori