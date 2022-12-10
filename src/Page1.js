import React from 'react';
import 'aframe'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';



function Page1 () {
 

  // render () {

    // function thr (){
    //   const navigate = useNavigate();
    // }
    // const navigate = useNavigate();
  


    // console.log(document.querySelector('a-text'));
    // console.log(document.querySelector('a-sky'));
    // console.log(document.querySelector('a-scene'));

    // const text = document.querySelector('a-text');


    // text.addEventListener('click', function (event) {
    //   console.log('Entity collided with', event.detail);
    // });

    // const AFRAME = window.AFRAME;

    // var sceneEl = document.querySelectorAll('a-image');
    // console.log(sceneEl);

    // AFRAME.registerComponent('foooo', {
    //   init: function theFunction () {
    //    console.log('Hello, World!');
    //    console.log(document.querySelectorAll('#etc'));
    //   }
    // });

    // AFRAME.registerComponent('foo2', {
    //    function () {
    //    console.log('Hello, World!');
    //   }
    // });

    // AFRAME.registerComponent('nn', {
    //   schema: {
    //     txt: {default:'default'}
    //   },        
    //   init: function () {
    //     // const navigate = useNavigate();
    //     // var data = this.data;
    //     var el = this.el;        
    //     el.addEventListener('click', function () {         

    //      reactFunction()
    //     // this.myfunction();
    //     // const navigate = useNavigate();
    //     // navigate('/page2');
    //     });   
    //   },
    // });

    // function reactFunction (){
    //   // const navigate = useNavigate();
    //   console.log('yesss')
    // }

  

    // AFRAME.registerComponent('log', {
    //   schema: {type: 'string'},
    
    //   init: function () {
    //     var stringToLog = this.data;
    //     console.log(stringToLog);
    //   }
    // });

    // function click (){
    //   console.log('clikìcked')
    // }

    const navigate = useNavigate();

    function goPage2(){
      navigate('/page2')
  }

 

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
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


          <a-sky src={require('./beach.jpg')} />
          {/* <a-sky src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929194/VR%20media/beach_pwtwqr.jpg' /> */}
          {/* <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
          cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="0.5" 
          animation="property: zoom; to: 1; dur: 3000; easing: linear; elasticity: 400; delay: 1000; dir: normal; loop: false;"
          ></a-camera> */}
          <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
          cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="1" 
          ></a-camera>
          <a-text color="black" position="0 2.25 -5" value="It's me brother page 2"></a-text>

           {/* link="href :page1;" src={require('./marker.png')} */}
          <a-image  clickable position="0 1.25 -5" scale="1.5 1.5 1.5"  onClick={goPage2}
          src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929144/VR%20media/marker_rhmqkc.png'
          animation="property: scale; to: 2 2 2; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"/>

          {/* <a-image foo2 id="etc" clickable position="2 1.25 -5" scale="1.5 1.5 1.5"
          src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929144/VR%20media/marker_rhmqkc.png'
          animation="property: scale; to: 2 2 2; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"/> */}
          {/* idea: make the page zoom from 0.5 to 1 */}
          
        </a-scene>
        </motion.div>
      
    );
  // }
}

export default Page1;