import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Container, Row, Col } from 'react-bootstrap';

import Navigation from '../components/navigation.component';
import MainCircleComponent from '../components/mainCircle.component';

import Video1 from '../videos/neo.mp4';
import Video2 from '../videos/biz.mp4';
import Video3 from '../videos/pro.mp4';
import Video4 from '../videos/top.mp4';

import ConsultationImg from '../images/consultation.svg';

const LandingPage = () => {
   const [screen, setScreen] = React.useState(1);
   const [activeCircle, setActiveCircle] = React.useState(1);

   const screenConfigs = {
      1: {
         background: "#5AD0A0",
         mainColor: "#fff",
         complementryColor: "#fff",
         mainText: "к новой профессии",
         circleColor: "#82E1C5",
         subText: "Курсы, которые помогут освоить востребованную профессию с нуля или изучить новую специализацию",
         video: Video1,
      },
      2: {
         background: "#1268FA",
         mainColor: "#fff",
         complementryColor: "#fff",
         circleColor: "#848BFB",
         mainText: "к росту в карьере",
         subText: "Курсы для специалистов с опытом, чтобы развиваться в профессии и открывать новые возможности в карьере",
         video: Video2,
      },
      3: {
         background: "#ED4D6C",
         mainColor: "#fff",
         complementryColor: "#fff",
         circleColor: "#F07FA6",
         mainText: "к новым решениям",
         subText: "Курсы для руководителей, чтобы развивать управленческие навыки и растить бизнес",
         video: Video3,
      },
      4: {
         background: "#6869F6",
         mainColor: "#fff",
         complementryColor: "#fff",
         circleColor: "#A48DF9",
         mainText: "к развитию команды",
         subText: "Курсы для корпоративного обучения: предложим готовое решение или разработаем программу под ваш запрос",
         video: Video4,
      },
   };

   const circleConfigs = [
      {
         mainText: "нео",
         subText: "для начинающих",
      },
      {
         mainText: "нео",
         subText: "для начинающих",
      },
      {
         mainText: "нео",
         subText: "для начинающих",
      },
      {
         mainText: "нео",
         subText: "для начинающих",
      },
   ];

   React.useEffect(() => {
      const interval = setInterval(() => {
         setActiveCircle(activeCircle >= 4 ? 1 : activeCircle + 1);
         setScreen(screen >= 4 ? 1 : screen + 1);
      }, 10000); 

      return () => clearInterval(interval);
   }, [activeCircle, screen]);

   const updateScreenHandler = (numScreen) => {
      setScreen(numScreen);
      setActiveCircle(numScreen);
   }

   return (
      <div className="landing">
         <main className="main" style={{ backgroundColor: screenConfigs[screen].background }}>
            <Navigation />

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
                              circleColor={item.circleColor}
                              activeCircle={activeCircle}
                              video={screenConfigs[circleConfigs.indexOf(item) + 1].video}
                           />
                        ))}
                     </Row>
                  </div>
               </Row>
            </Container>
         </main>
      
         <section className="consultaion">
            <Container>
               <Row>
                  <Col md={8}>
                     <div className="consultation__content">
                        <div className="consultation__content-header">
                           <h3>Получите консультацию <span>бесплатно</span></h3>
                        </div>

                        <div className="consultation__content-subheader">
                           <p>
                              Зарегистрируйтесь в Нетологии и получите доступ к бесплатным курсам и 
                              вебинарам — мы сделаем подборку под ваши интересы и цели.
                           </p>
                        </div>

                        <div className="consultation__content-input">
                           <form action="#">
                              <input type="text" placeholder="E-mail" />  
                              <button>Отправить</button> 
                           </form>   
                        </div>
                     </div>
                  </Col>

                  <Col md={4}>
                     <div className="consultation__img">
                        <img src={ConsultationImg} alt="consultation" />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </div>
   )
}

export default LandingPage;