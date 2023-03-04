import { useState } from "react"
import { useNavigate } from "react-router-dom"
import cart from "../images/cart-icon-28356.png"
import { connect, useDispatch } from "react-redux"
import { addTuote } from "../reducers/ostoskoriReducer"
import auth from "../services/auth"
import Cookies from "js-cookie"
import { initializeOstoskori } from "../reducers/ostoskoriReducer"



const Header = (props)=>{

    const navigate= useNavigate()

    const dispatch = useDispatch()

    const [navname, setNavname] = useState("Header")

    const shoppingCartEmpty = false

    const ShopAlert = ()=>{
        return(
            <div className="shopAlert">
                <div className="shopOuterLine">
                </div>
            </div>
        )
    }
    

    const fixHtop = ()=>{
        window.scrollY>800?setNavname("Header Fixed"):setNavname("Header");
    }

    window.addEventListener("scroll",fixHtop)

    const sites = ["Info","Keikat","Julkaisut","Shop"]

    

    return(
        <div className={navname}>
            <div className="NavBar">
                {sites.map(where=><h2 key={where+"HeaderNavBar"} onClick={()=>navigate(where)}> {where}</h2>)}
            </div>
            <div className="shoppingCart" onClick={()=>navigate("Ostoskori")}>
                <img src={cart} className="cartImage"/>
                {props.ostoskori?.length>0?<ShopAlert/>:<></>}
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
    addTuote,
    initializeOstoskori
}

const ConnectHeader = connect(mapStateProps, dispatchProps)(Header)

export default ConnectHeader
/*
<button onClick={()=>auth.setAuth()}>TESTI</button>
<button onClick={()=>console.log(Cookies.get('auth'))}> TESTI KAKSI</button>
<button onClick={()=>dispatch(initializeOstoskori())}> TESTI KOLME</button>
*/