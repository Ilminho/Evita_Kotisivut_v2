import { useState } from "react"

const Plus =  (props)=>{
    return(
        <div className="Round Second" onClick={props.onClick}>
            <div className="HorizontalLine"></div>
            <div className="VerticalLine"></div>
        </div>
    )
}

const Minus = (props)=>{
    return(
        <div className="Round" onClick={props.onClick}>
            <div className="HorizontalLine"></div>
        </div>
    )
}
const MaaraButton = (props)=>{

    const [maara, setMaara] = useState(props?.maara?props.maara:0)





    return(
        <div className="MaaraButton">
            <Minus onClick={props.minus}/>
            <div className="maara">{props.maara}</div>
            
            <Plus onClick={props.plus}/>

        </div>
    )
}

export default MaaraButton