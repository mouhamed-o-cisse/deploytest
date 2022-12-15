import React from 'react';
import 'aframe'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Page1 () {
 
    const navigate = useNavigate();

    function goPage2(){
      navigate('/page2')
  }

    return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} >

            {/* vr-mode-ui="enabled: true" */}
            <a-scene cursor="rayOrigin: mouse" raycaster="objects:[clickable]" 
              device-orientation-permission-ui="
              enabled: true; 
              denyButtonText: Ne pas activer; 
              allowButtonText: Activer ; 
              cancelButtonText: Fermer ; 
              deviceMotionMessage: Ce site immersif nécessite l'accès aux capteurs de mouvement de votre appareil ;
              mobileDesktopMessage: Ce site immersif nécessite l'accès aux capteurs de mouvement de votre appareil;
              httpsMessage: Accéder à ce site via HTTPS pour passer en mode VR et accorder l'accès aux capteurs de l'appareil;"
              >

            
                {/* <a-sky src={require('./images/beach.jpg')} /> */}
                <a-sky src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929194/VR%20media/beach_pwtwqr.jpg' />

                <a-camera visible="true" wasd-controls="enabled: false; easing: 10; acceleration: 75; fly: false;"
                cursor="rayOrigin: mouse;" raycaster="objects: .clickable" zoom="1" />

                <a-text color="black" position="0 2.25 -5" value="It's me brother page 2" />

                <a-image  clickable position="0 1.25 -5" scale="1.5 1.5 1.5"  onClick={goPage2}
                src='https://res.cloudinary.com/mouhamedscloud/image/upload/v1669929144/VR%20media/marker_rhmqkc.png'
                animation="property: scale; to: 2 2 2; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"/>
            
            </a-scene>

        </motion.div>
    );
}

export default Page1;