import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { ReactDOM } from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import Keikat from './components/Keikat';
import Releases from './components/Releases';
import Shop from './components/Shop';
import Image from './components/Image';
import Ostoskori from './components/Ostoskori'
import { useEffect, useRef } from 'react';
import auth from './services/auth';
import { connect, useDispatch } from 'react-redux';
import { initializeOstoskori } from './reducers/ostoskoriReducer';



function App(props) {

  const dispatch = useDispatch()

  const didmount = useRef(false)


  useEffect(()=>{
    const use = async ()=>{
      const response = await auth.setAuth()
    }

    dispatch(initializeOstoskori())

    console.log("Muuttuu");

    use()
  },[])

  
  useEffect(()=>{
    const sendOstoskori = async ()=>{
      const response = await auth.sendOstoskori(props.ostoskori)
    }
    if(props.ostoskori.length>0)
      sendOstoskori()

  }, [props.ostoskori])

  


  return (
    <div>
        <Router>

          <Image/>
          <Header/>
          
          <Routes>    
              <Route path='ostoskori' element={<Ostoskori/>}/>   
              <Route path='/Info' element={<Info/>}/>
              <Route path='/Keikat'element={<Keikat/>}/>
              <Route path='/Julkaisut' element={<Releases/>}/>
              <Route path='/Shop' element={<Shop/>}/>
              <Route path='/' element={<Info/>}/>
              <Route path="*" element={<div>No Element</div>}/>
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

const mapStateProps = (state)=>{
 
  return{
    ostoskori:state.ostoskori
  }
}

const dispatchProps = {

}

const ConnectApp = connect(mapStateProps, dispatchProps)(App)

export default ConnectApp

