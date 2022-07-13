import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/stylesheets/nav.css';
import './assets/stylesheets/num_pages.css';
import './assets/stylesheets/titular.css';
import './assets/stylesheets/projects.css';
import './App.css';
import './assets/stylesheets/titular_projects.css';
import './assets/stylesheets/about_me.css';
import about from './assets/images/image-aboutme.png';
import contact from './assets/images/image-contact.png';
import projects from './assets/images/image-projects.png';
import {NavLink} from 'react-router-dom';
import figma from './assets/images/figma.png';
import git from './assets/images/git.png';
import html from './assets/images/html-5.png';
import css from './assets/images/css-3.png';
import js from './assets/images/js.png';
import react from './assets/images/react.png';
import wordpress from './assets/images/wordpress.png';
import team from './assets/images/team.png';





import Nav from './assets/components/Nav'
import Num_pages from './assets/components/Num_pages'
import Titular from './assets/components/Titular'
import Titular_projects from './assets/components/Titular_projects';

function App() {
  AOS.init();
  
  return ( 
  <BrowserRouter>
    <Routes>
        <Route path='/' element={
          
          
          <div className="App">
              {/* <div className='menu_superior' id="swich">
                  <a className="link_menu" href="/"> HOME</a>
                  <a className="link_menu" href="/projects"> MY PROJECTS</a>
                  <a className="link_menu" href="/about"> ABOUT ME</a>
                  <a className="link_menu" href="/contact"> CONTACT</a>
              </div> */}
              <Nav/>
              <Num_pages/>
              <div className="limitador_text"><Titular texto="GARY LIMA"
              description="Front-end developer / future fullstack"
              />              
              </div>
              
              <Titular texto="My Projects"
              description="Website"/>
              <img className="img_complementaria"  data-aos="zoom-in-down" src={projects}/>
              <button className="cta_buton" id="view_projects" ><NavLink to="/projects">View Projects</NavLink></button>

              <Titular texto="About Me"
              description="I love Design, Technology and Story."/>
              <img className="img_complementaria"  data-aos="zoom-in-down" src={about}/>
              <button className="cta_buton" id="about_me" ><NavLink to="/about">About Me</NavLink></button>

              <Titular texto="Contact Me"
              description="garyhl321@gmail.com"/>
              <img className="img_complementaria " data-aos="zoom-in-down" src={contact}/>
              <button className="cta_buton" id="contact_me" ><NavLink to="/contact">Contact Me</NavLink></button>
            
          </div>
          
        }/>
        <Route path='/projects' element={
          <div>
            <Nav/>


            <Titular_projects
            texto="My Projects"
            description="
            un poco de mi trabajo"
            />
            <img className="img_complementaria" id="image_complementaria_mod" src={projects}/>
          
            <div>
              <section className="projects">
                <section class="select_project">
                  <div className="container_date">
                    <div className="rol">
                      <h3 className="date_title">Rol:</h3>
                      <p className="date_description">Developer / Scrum Master</p>
                    </div>
                    <div className="date">
                      <h3 className="date_title">Date:</h3>
                      <p className="date_description">JUN 2022</p>
                    </div>
                    <div className="overview">
                      <h3 className="date_title">Overview:</h3>
                      <p className="date_description">It is an application to keep people informed 
                        about the situation of covid-19 worldwide.
                        The data is updated automatically and users
                        can see detailed information for each country.</p>
                    </div>
                  </div>
                </section>
                <section className="container_carrusel">

                  <div className="center_carrusel">
                    <div className="cuadrado"></div>
                    <button className="cta_buton_project" id="contact_me" ><NavLink to="/contact">Contact Me</NavLink></button>
                  </div>

                </section>
              </section>
            </div>
          </div>
          
        } />

        <Route path='/about' element={
          <div>
            <div className="menu">
              <a></a>
              <a></a>
              <a></a>
              <a></a>
            </div>
            <Nav/>
            <Titular_projects
            texto="About Me"
            description="
            Web Sites"
            />
            <img className="img_complementaria" id="image_complementaria_mod" src={projects}/>
            <div className="about_page">
              <div className="section_1" id="section_mod">
                <div className="who_i_am">
                  <div className="line_1_about"></div>
                  <h2 className="title_about">WHO I AM</h2>
                </div>
                <div className="who_i_am_description">
                  <h3>GARY LIMA</h3>
                  <p>It is an application to keep people informed<br/>
                    about the situation of covid-19 worldwide.<br/>
                    The data is updated automatically and users<br/>
                    can see detailed information for each country.</p>
                    <img className="img_me"  src={projects}/>
                </div>
              </div>

              <div className="section_2">
                <div className="hobbies">
                  <div className="line_1_about" ></div>
                  <h2 className="title_about">HOBBIES</h2>
                </div>
                <div className="hobbies_cards">
                  <div className="card">
                    <img/>
                    <h3>Hobbie</h3>
                    <p>It is an application to keep people informed<br/>
                    about the situation of covid-19 worldwide.<br/>
                    The data is updated automatically and users<br/>
                    can see detailed information for each country.</p>
                  </div>
                  <div className="card">
                    <img/>
                    <h3>Hobbie</h3>
                    <p>It is an application to keep people informed<br/>
                    about the situation of covid-19 worldwide.<br/>
                    The data is updated automatically and users<br/>
                    can see detailed information for each country.</p>
                  </div>
                  <div className="card">
                    <img/>
                    <h3>Hobbie</h3>
                    <p>It is an application to keep people informed<br/>
                    about the situation of covid-19 worldwide.<br/>
                    The data is updated automatically and users<br/>
                    can see detailed information for each country.</p>
                  </div>
                </div>
              </div>

              <div className="section_3">
                <div className="skills_title">
                  <div className="line_1_about"></div>
                  <h2 className="title_about">MY SKILLS</h2>
                </div>
                <div className="container_skills">
                  <div className="skills1">
                    <div className="container_skill_min">
                      <img className="skill_icon" src={html}/>
                      <div className="text_containerbar">
                        <div className="container-text">
                          <h4>HTML 5</h4>
                          <h6>2 MONTHS</h6>
                          <h5>90%</h5>
                        </div>
                        <div className="bar">
                          <div className="progres_bar1" data-aos="zoom-in-left"></div>
                        </div>
                      </div>
                    </div>

                    <div className="container_skill_min">
                      <img className="skill_icon" src={css}/>
                      <div className="text_containerbar">
                        <div className="container-text">
                          <h4>CSS 3</h4>
                          <h6>2 MONTHS</h6>
                          <h5>85%</h5>
                        </div>
                        <div className="bar">
                          <div className="progres_bar2" data-aos="zoom-in-left"></div>
                        </div>
                      </div>
                    </div>

                    <div className="container_skill_min">
                      <img className="skill_icon" src={js}/>
                      <div className="text_containerbar">
                        <div className="container-text">
                          <h4>Javascript</h4>
                          <h6>2 MONTHS</h6>
                          <h5>37%</h5>
                        </div>
                        <div className="bar">
                          <div className="progres_bar3"data-aos="zoom-in-left"></div>
                        </div>
                      </div>
                    </div>

                    <div className="container_skill_min">
                      <img className="skill_icon" src={git}/>
                      <div className="text_containerbar">
                        <div className="container-text">
                          <h4>Git</h4>
                          <h6>2 MONTHS</h6>
                          <h5>40%</h5>
                        </div>
                        <div className="bar">
                          <div className="progres_bar4" data-aos="zoom-in-left"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="skills1">
                    <div className="container_skill_min">
                      <img className="skill_icon" src={figma}/>
                      <div className="text_containerbar">
                        <div className="container-text">
                          <h4>Figma</h4>
                          <h6>2 MONTHS</h6>
                          <h5>78%</h5>
                        </div>
                        <div className="bar">
                          <div className="progres_bar5" data-aos="zoom-in-left"></div>
                        </div>
                      </div>
                    </div>

                    <div className="container_skill_min">
                      <img className="skill_icon" src={react}/>
                      <div className="text_containerbar">
                        <div className="container-text">
                          <h4>React</h4>
                          <h6>2 MONTHS</h6>
                          <h5>23%</h5>
                        </div>
                        <div className="bar">
                          <div className="progres_bar6" data-aos="zoom-in-left"></div>
                        </div>
                      </div>
                    </div>

                    <div className="container_skill_min">
                      <img className="skill_icon" src={team}/>
                      <div className="text_containerbar">
                        <div className="container-text">
                          <h4>Agile</h4>
                          <h6>2 MONTHS</h6>
                          <h5>72%</h5>
                        </div>
                        <div className="bar">
                          <div className="progres_bar7" data-aos="zoom-in-left"></div>
                        </div>
                      </div>
                    </div>

                    
                    
                  </div>
                  
                </div>
              </div>
              <div className="section_4">
                <h3>garyhl321@gmail.com</h3>
                
              </div>

            </div>
          </div>
        } />


    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
