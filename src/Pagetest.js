import { useNavigate } from 'react-router-dom';
import React, { Component } from 'react';
import 'aframe'
import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';



function Pagetest (){

    const [istrue, setIsTrue] = useState('false');

    const AFRAME = window.AFRAME;

    const rek = () => setIsTrue('true');

    const navigate = useNavigate();

    const handleSubmit = useCallback(() => {
        console.log('used callback')
        // navigate()
      }, []);

    // console.log(document.querySelector('#etc'))

    function testFunction (){
        console.log('test function')
    }

 AFRAME.registerComponent('my-beautiful', {
    // schema: {
    //   txt: {default:'default'}
    // },        
    init: function () {
      // const navigate = useNavigate();
      // var data = this.data;
      var el = this.el;        
      el.addEventListener('click', function () {         

        // rek(); 

        console.log(useNavigate)

        // handleSubmit(); 
      });   
    },
  });

//   console.log(thy)

//   AFRAME.registerComponent('foo0', {
//     init: function () {
//         var el = this.el; 
//       console.log(el);  // Reference to the scene element.
//       el.addEventListener('click', function () {         

//         // rek(); 

//         navigate('/')

//         console.log(navigate)
//       });  
//     }
//   });
  
//   useEffect(() => {
      
//       if(setIsTrue === 'true'){
//         console.log('reppp')
//       }
//     // if (userIsInactive) {
//     //   fake.logout();
//     //   navigate("/session-timed-out");
//     // }
//   }, [setIsTrue]);


//   function reactFunction (){
//       navigate('/page2')
//     //   console.log('rekkk')
  
//   }


  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} 
    >
     <a-scene vr-mode-ui="enabled: true" cursor="rayOrigin: mouse" raycaster="objects:[clickable]" 
     device-orientation-permission-ui="
     enabled: true; 
     denyButtonText: Ne pas activer; 
     allowButtonText: Activer ; 
     cancelButtonText: Fermer ; 
     deviceMotionMessage: Ce site immersif nécessite l'accès aux capteurs de mouvement de votre appareil ;
     mobileDesktopMessage: Ce site immersif nécessite l'accès aux capteurs de mouvement de votre appareil;
     httpsMessage: Accéder à ce site via HTTPS pour passer en mode VR et accorder l'accès aux capteurs de l'appareil;
     "
     >

      <a-box id="redbox" log="Hello, Box!"></a-box>


      {/* <a-sky src={require('./beach.jpg')} /> */}
      <a-sky src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929194/VR%20media/beach_pwtwqr.jpg' />
      <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
      cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="0.5" 
      animation="property: zoom; to: 1; dur: 3000; easing: linear; elasticity: 400; delay: 1000; dir: normal; loop: false;"
      ></a-camera>
      <a-text color="black" position="0 2.25 -5" value="It's me brother page 2"></a-text>
       {/* link="href :page1;" src={require('./marker.png')} */}

      <a-image my-beautiful  clickable position="0 1.25 -5" scale="1.5 1.5 1.5" 
      src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929144/VR%20media/marker_rhmqkc.png'
      animation="property: scale; to: 2 2 2; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"/>

      {/* <a-image foo0 id="etc" clickable position="2 1.25 -5" scale="1.5 1.5 1.5" 
      src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929144/VR%20media/marker_rhmqkc.png'
      animation="property: scale; to: 2 2 2; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"/> */}
      {/* idea: make the page zoom from 0.5 to 1 */}
      
    </a-scene>
    </motion.div>
  ); 
}

export default Pagetest;