import { connect } from "react-redux"
import { addTuote } from "../reducers/ostoskoriReducer";


const Ostoskori =(props)=>{

    return(
        <div className="OstoskoriWrapper">

            <h1>OSTOSKORI</h1>

            {props.ostoskori?.length<1?"Ostoskorisi on tyhjä":
                props.ostoskori.map((tuote,index)=>
                <div key={index+"ostoskori"} className="Ostoskori_Ostos">
                    <img src={tuote.kuva} className="OstoskoriKuva"></img>
                    <b>Nimi:</b> {tuote.nimi}
                    <b> Määrä:</b>{tuote.maara} 
                    {tuote.tyyppi} 
                    <b>Hinta per kappale:</b> {tuote.hinta}e 
                    <b>Hinta yhteensä:</b> {tuote.hinta*tuote.maara}
                </div>
                )
            }

            <div className="KaikkiOstokset">
                <h2>Ostoskori yhteensä:</h2>
                <h3>{props.ostoskori.reduce((p,c)=>p+c.maara*c.hinta,0)}e</h3>
            </div>

            


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

const ConnectOstoskori = connect(mapStateProps, dispatchProps)(Ostoskori)

export default ConnectOstoskori