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
import { useEffect } from 'react';


function App() {


  const ScrollToTop = ()=>{
    useEffect(()=>{
      window.scrollY>800?window.scrollTo(0,800):console.log("nada");
    },[])

    return(null)
  }

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

export default App;
