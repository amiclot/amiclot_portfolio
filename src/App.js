import React, { Component } from "react";
import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import Card from "./components/Card";
import Logo from "./components/Logo";
import port_img from "./images/portfolio_img.jpg";
import bjj_img from "./images/transcendbjj.JPG";
import healthdash_img from "./images/healthdash.JPG";
import geek_img from "./images/geek.JPG";
import OR_img from "./images/open-rolls.JPG";
import KP_img from "./images/kenprotects.JPG";
import WBABC_img from "./images/wbabc.JPG";
import phuneware from "./images/phuneware.png";
import conductor_HS from "./images/conductor_HS.png";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
          <Container>
            <Container>
              <Row>
                <Col size="md-12">
                  <Card>
                    <Row>
                      <Col size="md-4">
                        <Logo logo="port_img"/>
                      </Col>
                      <Col size="md-8">
                        <div>
                          <div class="text-box">
                            <div class="hover">
                              <p>Adam Miclot is UX/UI front-end developer with experience in both mobile and web. He received his coding education from Case Western Reserve, and his MBA from John Carroll. He is currently developing mobile and web applications across multiple industries (Retail, Security, Education) for We Build Apps.</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Row>
              <Col size="md-12">
                  <Container>
                    <Row>
                      <Card>
                        <h1>Mobile Development</h1>
                        <Col size="md-6">
                          <Card>
                            <h2>Conductor Platform</h2>
                            <div class="mainmain">
                              <a href="http://webuildappsllc.com/conductor/"><img class="egger" src={conductor_HS} alt="conductor"/>
                              <div class="texter">
                                The conductor platform is being developed in React Native. It includes Wayfinding, Parking reminders, Back-end support for Offers and Events, and Augmented Reality. Conductor will launch in August of 2018. 
                              </div></a>
                            </div>
                          </Card>
                        </Col>
                        <Col size="md-6">
                          <Card>
                            <h2>Crocker Park App</h2>
                            <div class="mainmain">
                              <a href="http://webuildappsllc.com/conductor/"><img class="egger" src={phuneware} alt="crockerpark" />
                              <div class="texter">
                                This is the first version of the Crocker Park app - to be replaced by the Conductor Platform. Developed along side a company called Phunware. I was the point person for UX/UI development. 
                              </div></a>
                            </div>
                          </Card>
                        </Col>
                      </Card>
                    </Row>
                    <Row>
                      <Card>
                        <h1>Github Repositories and Live Sites</h1>
                        <Col size="md-6">
                          <Card>
                            <h2>Solo Project - Open Rolls</h2>
                            <div class="mainmain">
                              <a href="https://github.com/amiclot/open-rolls"><img class="egger" src={OR_img} alt="port_img" />
                              <div class="texter">
                                A project still in development, for Brazilian Jiu Jitsu athletes to find open training sessions in their city or when they travel. The front-end is built with ReactJS and the back end is done in MongoDB using Mongoose. I did the planning and execution for this app, learning the MERN stack in the process. CLICK to see this project's GitHub repository.
                              </div></a>
                            </div>
                          </Card>
                          <Card>
                            <h2>Collaborative Project - Guide-A-Geek</h2>
                            <div class="mainmain">
                              <a href="https://github.com/Button-Mashers/Guide-A-Geek"><img class="egger" src={geek_img} alt="port_img" />
                              <div class="texter">
                                A dashboard for the Assassin’s Creed Origins video game. The app was built with a MySQL  back-end and utilized Embedded Javascript for templating. The app also included a web scraper using cheerio. My responsibilities were user authentication, route creation, and front-end templating. CLICK to see this project's GitHub repository.
                              </div></a>
                            </div>
                          </Card>
                        </Col>
                        <Col size="md-6">
                          <Card>
                            <h2>Collaborative Project - HealthDash</h2>
                            <div class="mainmain">
                              <a href="https://github.com/the-code-whisperers/project"><img class="egger" src={healthdash_img} alt="port_img" />
                              <div class="texter">
                                A calorie tracker made for user to track their daily caloric intake and caloric exercise output.  The app includes user authentication, Youtube API to pull relevant exercise videos depending on user selection, and a calorie counter. My responsibilities were building the Youtube API and overall front-end design/code. CLICK to see this project's GitHub repository.
                              </div></a>
                            </div>
                          </Card>
                          <Card>
                            <h2>Solo Project - Transcend BJJ</h2>
                            <div class="mainmain">
                              <a href="https://amiclot.github.io/"><img class="egger" src={bjj_img} alt="port_img" />
                              <div class="texter">
                                I created this site early in the Case Western program to practice JQuery, HTML5 and CSS3. The site was a request from a colleague planning to open a Brazilian Jiu Jitsu business. I would later use some of the styling from this project as compoenents in my final fullstack ReactJS app "open-rolls". CLICK to go to Site.
                              </div></a>
                            </div>
                          </Card>
                        </Col>
                      </Card>
                    </Row>
                    <Row>
                      <Card>
                        <h1>Wordpress Sites</h1>
                        <Col size="md-6">
                          <Card>
                            <h2>Ken Protects</h2>
                            <div class="mainmain">
                              <a href="http://www.kenprotects.com/"><img class="egger" src={KP_img} alt="insurance" />
                              <div class="texter">
                                I built this site for a friend's Life insurance company, using WordPress. Ken, is still working on his content. Future states of this project will include a training portal for prospective employees, and a life insurance calculator.
                              </div></a>
                            </div>
                          </Card>
                        </Col>
                        <Col size="md-6">
                          <Card>
                            <h2>WBA - Coding Bootcamp</h2>
                            <div class="mainmain">
                              <a href="http://www.webuildappsllc.com/bootcamp/"><img class="egger" src={WBABC_img} alt="bootcamp" />
                              <div class="texter">
                                I built this site for We Build Apps. The company plans to launch the boot camp this Fall as a way to fill a gap in the current bootcamp landscape, as well as a pipeline for talent to recruit to the WBA company. This includes current development on We Build Apps core site. 
                              </div></a>
                            </div>
                          </Card>
                        </Col>
                      </Card>
                    </Row>
                  </Container>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default App;
