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
        >
         <a-scene vr-mode-ui="enabled: true" cursor="rayOrigin: mouse" raycaster="objects:[clickable]" 
         device-orientation-permission-ui="enabled: true; denyButtonText: '333'"
         >
          <a-sky src={require('./beach.jpg')} />
          <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
          cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="0.5" 
          animation="property: zoom; to: 1; dur: 3000; easing: linear; elasticity: 400; delay: 1000; dir: normal; loop: false;"
          ></a-camera>
          <a-text color="black" position="0 2.25 -5" value="It's me brother page 2" ></a-text>
           {/* link="href :page1;"  */}
          <a-image id="tery" clickable src={require('./marker.png')} position="0 1.25 -5" scale="1.5 1.5 1.5" link="href :page2;" 
          animation="property: scale; to: 2 2 2; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: flase;"
          on='click'
          />

          {/* idea: make the page zoom from 0.5 to 1 */}
          
      </a-scene>
        </motion.div>
      
    );
  }
}

export default Page1;