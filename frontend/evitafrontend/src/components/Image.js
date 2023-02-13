import kuva from "../images/Evita_c_ Touko Hujanen.JPG"

const Image =()=>{
    return(
        <div className="Image">

            <h1 className="EVITA_TEXT">EVITA</h1>
            <img src={kuva} className="ToukoKuva"/>
        </div>
    )
}

export default Image