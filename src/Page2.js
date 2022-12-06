import React, { Component } from 'react';
import 'aframe'
import { motion } from 'framer-motion';

class Page1 extends Component {
  render () {
    return (
      <motion.div
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a-scene vr-mode-ui="enabled: true" cursor="rayOrigin: mouse" raycaster="objects:[clickable]" zoom='2'>
          <a-sky src={require('./bedroom.jpeg')} />
          {/* <a-sky src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929194/VR%20media/beach_pwtwqr.jpg' /> */}
          {/* <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
          cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="0.5" 
          animation="property: zoom; to: 1; dur: 3000; easing: linear; elasticity: 400; delay: 1000; dir: normal; loop: false;"
          ></a-camera> */}
          <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
          cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="1" 
          ></a-camera>
          <a-text color="black" position="0 2.25 -5" value="It's me brother page 3" ></a-text>
           {/* link="href :page1;"  */}
          <a-image id="tery" clickable position="0 1.25 -5" scale="1.5 1.5 1.5" 
          src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929144/VR%20media/marker_rhmqkc.png'
          animation="property: scale; to: 2 2 2; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"/>

          {/* idea: make the page zoom from 0.5 to 1 */}
          
      </a-scene>
      </motion.div>
      
    );
  }
}

export default Page1;