import React from 'react';
import 'aframe'
import { motion } from 'framer-motion';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';


function HomePage () {

  const navigate = useNavigate();

    function goPage2(){
      navigate('/page1')
  }
   
    return (
      <motion.div className='container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}>

         <div className='subcon'>

           <h1>Bienvenue dans l'espace virtuelle ...</h1>
           
           <p>Vous êtes sur le point de vivre une expérience immersive unique...</p>

           <button className='link' onClick={goPage2} >Commencer</button>

         </div>
      </motion.div>
    );
}

export default HomePage;