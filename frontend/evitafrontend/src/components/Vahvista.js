/* eslint-disable */ 

const Vahvista = (props)=>{
    return(
        <div className="Vahvista">
            <button onClick={props.sulje} className="tyhjennaButton ">Sulje</button>
            <button className="tyhjennaButton">Maksa</button>
        </div>
    )
}

export default Vahvista