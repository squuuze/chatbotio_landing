import React from 'react';
import { Col } from 'react-bootstrap';

const CircleActiveMode = {
   transform: "scale(1.2)",
   zIndex: "10",
};

const CircleNotActiveMode = {
   transform: "scale(1)",
}

const MainCircleComponent = ({ 
      updateScreenHandler, 
      screenNum, 
      mainText, 
      subText, 
      activeCircle, 
      video 
   }) => {
      console.log(activeCircle);

   return (
      <Col md={4}>
         <div 
            className="main__circle" 
            onMouseEnter={() => updateScreenHandler(screenNum)}
            style={activeCircle === screenNum ? CircleActiveMode : CircleNotActiveMode}
         >
            <video 
               autoPlay 
               muted 
               loop="true"
               style={{ display: activeCircle === screenNum ? "block" : "none" }}
               className="main__circle-video"
            >
               <source src={video} />
            </video>

            <h4 className="main__circle-text">{mainText}</h4>
            <p className="main__circle-subtext">{subText}</p>
            <p className="main__circle-arrow">→</p>
         </div>
      </Col>
   )
}

export default MainCircleComponent;