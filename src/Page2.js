import React from 'react';
import 'aframe'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Page2 () {

    const navigate = useNavigate();

    function goPage3(){
      navigate('/page3')
  }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}>

         {/* vr-mode-ui="enabled: true" */}
          <a-scene cursor="rayOrigin: mouse" raycaster="objects:[clickable]" >

            {/* <a-sky src={require('./images/bedroom.jpeg')} /> */}
            <a-sky src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1670418123/VR%20media/bedroom_ylochs.jpg' />
          
            {/* idea: make the page zoom from 0.5 to 1 */}
            <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
            cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="1" />

            <a-text color="black" position="0 2.25 -5" value="It's me brother page 3" />

            <a-image id="tery" clickable position="0 1.25 -5" scale="1.5 1.5 1.5" onClick={goPage3}
            src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929144/VR%20media/marker_rhmqkc.png'
            animation="property: scale; to: 2 2 2; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"/>
          
          </a-scene>

      </motion.div>
    );
}

export default Page2;