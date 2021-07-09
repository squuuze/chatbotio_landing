import React from "react";
import { Col } from 'react-bootstrap';

const BotSkillItem = () => {
   return (
      <Col md={6}>
         <div className="botskills__item">
            <div className="botskills__item-content">
               <h4>Маркетинг</h4>
               <p>11 професий • 42 курса</p>
            </div>

            <div className="botskills__item-icon">
               icon
            </div>
         </div>
      </Col>
   )
}

export default BotSkillItem;