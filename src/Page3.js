import React from 'react';
import 'aframe'
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

// import e from 'express';
// import { Link } from 'react-router-dom';
// import { AFRAME } from 'aframe';

// var sceneEl = document.querySelector('a-scene');

// AFRAME.registerComponent('foo', {

//   init: function () {
//     console.log(this.el.sceneEl);  // Reference to the scene element.
//   }
// });

// var sceneEl = document.querySelector('a-scene');

// function click(){
//   console.log('click')
// }

function Page1 () {

  const navigate = useNavigate();

    function goPage1(){
      navigate('/page1')
  }
  
  // render () {
   
    return (
      <motion.div className='div'
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      <a-scene vr-mode-ui="enabled: true" cursor="rayOrigin: mouse" raycaster="objects:[clickable]">
          <a-sky src={require('./street.jpeg')} />
          {/* <a-sky src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929194/VR%20media/beach_pwtwqr.jpg' /> */}
          {/* <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
          cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="0.5" 
          animation="property: zoom; to: 1; dur: 3000; easing: linear; elasticity: 400; delay: 1000; dir: normal; loop: false;"
          ></a-camera> */}
          <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
          cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="1" 
          ></a-camera>
          <a-text color="black" position="0 2.25 -5" value="It's me brother page 1" ></a-text>
           {/* link="href :page1;"  */}
           <a-image id="tery" clickable position="0 1.25 -5" scale="1.5 1.5 1.5" onClick={goPage1}
          src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929144/VR%20media/marker_rhmqkc.png'
          animation="property: scale; to: 2 2 2; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"/>

          {/* idea: make the page zoom from 0.5 to 1 */}
          
      </a-scene>
      </motion.div>
    );
  // }
}

export default Page1;