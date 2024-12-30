import React, { useState } from 'react';
import './app.css';
import carroPreto from './assets/carro-preto.png';
import arvore1 from './assets/arvore1.png';
import arvore2 from './assets/arvore2.png';
import arvore3 from './assets/arvore3.png';
import arvore4 from './assets/arvore4.png';
import arvore5 from './assets/arvore5.png';
import arvore6 from './assets/arvore6.png';
import roda from './assets/roda.png';
import rodaR from './assets/roda2.png';

function App() {


  return (
    <div className="container">

      
      <img className='arvore1' id='arvore1' src={arvore1} alt=""/>
      <img className='arvore2' id='arvore2' src={arvore2} alt=""/>
      <img className='arvore3' id='arvore3' src={arvore3} alt=""/>
      <img className='arvore4' id='arvore4' src={arvore4} alt=""/>
      <img className='arvore5' id='arvore5' src={arvore5} alt=""/>
      <img className='arvore6' id='arvore6' src={arvore6} alt=""/>
      <img className='car' id='car' src={carroPreto} alt=""/>
      <img src={roda} alt="" className="roda" id="roda" />
      <img src={rodaR} alt="" className="rodaR" id="rodaR" />
      <hr className='divider' />

      
     
    
    </div>
  );
}

export default App;
