import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Container, Row, Col } from 'react-bootstrap';

import MainCircleComponent from '../components/mainCircle.component';

const LandingPage = () => {
   const [screen, setScreen] = React.useState(1);

   const screenConfigs = {
      0: {
         background: "#fff",
         mainColor: "#000",
         complementryColor: "#1268FA",
         mainText: "к переменам",
         subText: "Современные курсы для роста в карьере, развития бизнеса и получения новой профессии",
      },
      1: {
         background: "#5AD0A0",
         mainColor: "#fff",
         complementryColor: "#fff",
         mainText: "к новой профессии",
         subText: "Курсы, которые помогут освоить востребованную профессию с нуля или изучить новую специализацию",
      },
      2: {
         background: "#1268FA",
         mainColor: "#fff",
         complementryColor: "#fff",
         mainText: "к росту в карьере",
         subText: "Курсы для специалистов с опытом, чтобы развиваться в профессии и открывать новые возможности в карьере",
      },
      3: {
         background: "#ED4D6C",
         mainColor: "#fff",
         complementryColor: "#fff",
         mainText: "к новым решениям в бизнесе",
         subText: "Курсы для руководителей, чтобы развивать управленческие навыки и растить бизнес",
      },
      4: {
         background: "#6869F6",
         mainColor: "#fff",
         complementryColor: "#fff",
         mainText: "к развитию команды",
         subText: "Курсы для корпоративного обучения: предложим готовое решение или разработаем программу под ваш запрос",
      },
   };

   const circleConfigs = [
      {
         mainText: "Нео",
         subText: "для начинающих",
      },
      {
         mainText: "Нео",
         subText: "для начинающих",
      },
      {
         mainText: "Нео",
         subText: "для начинающих",
      },
      {
         mainText: "Нео",
         subText: "для начинающих",
      },
   ];

   const updateScreenHandler = (numScreen) => {
      setScreen(numScreen);
   }

   return (
      <div className="landing">
         <main className="main" style={{ backgroundColor: screenConfigs[screen].background }}>
            <nav className="navigation">
               navigation
            </nav>

            <Container>
               <Row xl={1} md={2}>
                  <div className="main__content">
                     <Row xl={12}>
                        <Col md={8} className="main__content-text">
                           <div className="main__content-stable">
                              Сделайте шаг
                           </div>

                           <div className="main__content-prints">
                              <ReactTypingEffect
                                 text={[screenConfigs[screen].mainText]}
                              />
                           </div>
                        </Col>

                        <Col xl={4} className="main__content-subtext">
                           {screenConfigs[screen].subText}
                        </Col>
                     </Row>

                     <Row xl={4} md={4} className="text-center mt-5">
                        {circleConfigs.map(item => (
                           <MainCircleComponent 
                              updateScreenHandler={updateScreenHandler}
                              screenNum={circleConfigs.indexOf(item) + 1}
                              mainText={item.mainText}
                              subText={item.subText}
                           />
                        ))}
                     </Row>
                  </div>
               </Row>
            </Container>
         </main>
      </div>
   )
}

export default LandingPage;