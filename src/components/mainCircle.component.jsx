import React from 'react';
import { Col } from 'react-bootstrap';

const MainCircleComponent = ({ updateScreenHandler, screenNum, mainText, subText }) => {
   return (
      <Col md={4}>
         <div className="main__circle" onMouseEnter={() => updateScreenHandler(screenNum)}>
            <h4 className="main__circle-text">{mainText}</h4>
            <p className="main__circle-subtext">{subText}</p>
            <p className="main__circle-arrow">→</p>
         </div>
      </Col>
   )
}

export default MainCircleComponent;