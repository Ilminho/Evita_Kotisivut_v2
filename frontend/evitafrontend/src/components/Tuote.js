import { useEffect, useState } from "react"
import SelectInput from "./SelectInput"
import MaaraButton from "./MaaraButton"
import { addTuote } from "../reducers/ostoskoriReducer"
import { useDispatch } from 'react-redux'
import { connect } from "react-redux"

const Tuote = (props)=>{

    

    const tuote = props.tuote
    const dispatch = useDispatch()

    const [maara, setMaara] = useState(0)

    const [image, setImage] = useState("No image")
    const [selected, setSelected] = useState(tuote.tuotteet[0])

    console.log(props.tuote);

    const minusOne =()=>{
        maara>0?setMaara(maara-1):console.log("No can do");
    }

    const plusOne = ()=>{
        setMaara(maara+1)
    }
    
    const lisaaTuote=()=>{
        if(maara<1)
            return;
        setMaara(0)
        dispatch(addTuote({nimi:tuote.nimi,tyyppi:selected.tyyppi, hinta:selected.hinta,kuva:tuote.kuva, maara:maara, tyypit:tuote.tyypit}))
    }

    const changeSelected = (tyyppi)=>{
        setSelected(tyyppi[0])
    }





    return(
        <div className="Tuote">
            <h1>{tuote?.nimi?tuote.nimi:"Ei nimeä"}</h1>
            
            <p>{tuote?.kuvaus?tuote.kuvaus:"Ei kuvausta"}</p>

            <img src={tuote.kuva} alt="Tuotekuva" className="Tuotekuva"/>
            <SelectInput tuotteet={tuote.tuotteet} changeTyyppi={changeSelected}/>

            <MaaraButton minus={minusOne} plus={plusOne} maara={maara}/>

            <button className="TuoteAdd" onClick={lisaaTuote}>Lisää tuote</button>
            <h3>Hinta: {selected?.hinta?selected.hinta:"Ei hintaa"}e</h3>
        </div>
    )
}

const mapStateProps = (state)=>{
    return{
      ostoskori:state.ostoskori
    }
}

const dispatchProps = {
  addTuote
}

const ConnectTuote = connect(mapStateProps, dispatchProps)(Tuote)

export default ConnectTuote

