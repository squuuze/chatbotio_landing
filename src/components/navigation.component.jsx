import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineBars } from 'react-icons/ai';

import Logo from '../images/logo.svg';

const Navigation = () => {
   return (
      <nav className="navigation">
         <div className="navigation__logo">
            <img src={Logo} alt="logo" />
         </div>

         <div className="navigation__content">
            <Container>
               <Row style={{ alignItems: "center" }}>
                  <Col md={4}>
                     <button className="button__default">
                        <AiOutlineBars size={20} className="mr-2" />
                        <span>Каталог ботов</span>
                     </button>
                  </Col>

                  <Col className="text-right">
                     <button className="button__nobg mr-4">Бесплатная консультация</button>
                     <button className="button__nobg">Контакты</button>
                  </Col>
               </Row>
            </Container>
         </div>

         <div className="navigation__btn">
            <button className="button__default">
               Заказать
            </button>
         </div>
      </nav>
   )
}

export default Navigation;