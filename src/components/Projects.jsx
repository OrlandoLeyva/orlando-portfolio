// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// Projects posters
import countriesPoster from '../assets/img/countries-poster.png'
import adviceGeneratorPoster from '../assets/img/advice-generator-poster.png'
import shortlyPoster from '../assets/img/shortly-poster.png'
import quizzicalPoster from '../assets/img/quizzical-poster.png'
import moviesSearcher from '../assets/img/movies-searcher-poster.png'
import multiStepForm from '../assets/img/form-poster.png'
import todoPoster from '../assets/img/TODO-poster.png'
import timeTrackingPoster from '../assets/img/time-tracking-dashboard-poster.png'

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Advice Generator",
//       description: "Web Development",
//       imgUrl: adviceGeneratorPoster,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="project">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>This projects showcase my abilities.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.slice(0, 3).map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <p>This projects showcase my abilities.</p>
    <div className="projects-container">
                <div className="project-item">
                    <img className="project-poster" src={countriesPoster} alt="" />
                    <div className="technologies">
                        <p>HTML, CSS, JavaScript, API</p>
                    </div>
                    <div className="project-links">
                        <a href="https://the-countries.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a>
                        <a href="https://github.com/OrlandoLeyva/The-countries" target="_blank" rel="noreferrer">Project Repository</a>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-poster" src={adviceGeneratorPoster} alt="" />
                    <div className="technologies">
                        <p>HTML, CSS, JavaScript, API</p>
                    </div>
                    <div className="project-links">
                        <a href="https://advice-generator-orlando.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a>
                        <a href="https://github.com/OrlandoLeyva/Advice-generator" target="_blank" rel="noreferrer">Visit Repository</a>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-poster" src={shortlyPoster} alt="" />
                    <div className="technologies">
                        <p>HTML, CSS, JavaScript, API</p>
                    </div>
                    <div className="project-links">
                        <a href="https://shortly-orlando.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a>
                        <a href="https://github.com/OrlandoLeyva/URL-shortening" target="_blank" rel="noreferrer">Visit Repository</a>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-poster" src={quizzicalPoster} alt="" />
                    <div className="technologies">
                        <p>HTML, CSS, JavaScript, API, React</p>
                    </div>
                    <div className="project-links">
                        <a href="https://quizzical-app-orlando.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a>
                        <a href="https://github.com/OrlandoLeyva/quizzical-app" target="_blank" rel="noreferrer">Visit Repository</a>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-poster" src={moviesSearcher} alt="" />
                    <div className="technologies">
                        <p>HTML, CSS, JavaScript, API, React</p>
                    </div>
                    <div className="project-links">
                        <a href="https://movies-searcher-orlando.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a>
                        <a href="https://github.com/OrlandoLeyva/Movies-Searcher" target="_blank" rel="noreferrer">Visit Repository</a>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-poster" src={multiStepForm} alt="" />
                    <div className="technologies">
                        <p>HTML, CSS, JavaScript, API, React</p>
                    </div>
                    <div className="project-links">
                        <a href="https://multi-step-form-orlando.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a>
                        <a href="https://github.com/OrlandoLeyva/multi-step-form" target="_blank" rel="noreferrer">Visit Repository</a>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-poster" src={todoPoster} alt="todo app form-poster" />
                    <div className="technologies">
                        <p>HTML, CSS, JavaScript, React</p>
                    </div>
                    <div className="project-links">
                        <a href="https://todo-app-orlando.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a>
                        <a href="https://github.com/OrlandoLeyva/TODO" target="_blank" rel="noreferrer">Visit Repository</a>
                    </div>
                </div>

                <div className="project-item">
                    <img className="project-poster" src={timeTrackingPoster} alt="time tracking poster" />
                    <div className="technologies">
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                    <div className="project-links">
                        <a href="https://time-tracking-dashboard-orlando.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a>
                        <a href="https://github.com/OrlandoLeyva/time-tracking-dashboard" target="_blank" rel="noreferrer">Visit Repository</a>
                    </div>
                </div>
            </div>
    </section>
  )
}