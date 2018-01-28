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
                              <p>I am Case Western Coding Bootcamp Grad and a Retail Professional Merchant / MBA graduate, who is currently pursuing a web development position that will grow my experience and skills. I have experience in HTML5, CSS3, Javascript, JQuery, Bootstrap, MERN stack, Git and MySQL. Below are links to the github repositories for the projects I am working on.</p>
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
                <form>
                  <Container>
                    <Row>
                      <Col size="md-6">
                        <Card>
                          <h2>Solo Project - Open Rolls</h2>
                          <div class="mainmain">
                            <a href="https://github.com/amiclot/open-rolls"><img class="egger" src={OR_img} alt="port_img" />
                            <div class="texter">
                              A working project, for Brazilian Jiu Jitsu athletes to find open training sessions in their city or when they travel. The front-end is built with ReactJS and the back end is done in MongoDB using Mongoose. I did the planning and execution for this app, learning the MERN stack in the process. CLICK to see this project's GitHub repository.
                            </div></a>
                          </div>
                        </Card>
                        <Card>
                          <h2>Collaborative Project - Guide-A-Geek</h2>
                          <div class="mainmain">
                            <a href="https://github.com/Button-Mashers/Guide-A-Geek"><img class="egger" src={geek_img} alt="port_img" />
                            <div class="texter">
                              A dashboard for the Assassin’s Creed Origins video game. The app was built with a MySQL  back-end and utilized Embedded Javascript for templating. The app also included a web scraper using cheerio. My responsibilities were everything except for the web scraper, and some of the front-end design. Including user authentication, route creation, and front-end templating. CLICK to see this project's GitHub repository.
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
                              A calorie  tracker made for user to track their daily caloric intake and caloric exercise output.  The app includes user authentication (Firebase), Youtube API to pull relevant exercise videos depending on user selection, Nutritionix API, and Bideo.js plugin to add styling to the user registration page. My responsibilities were building the Youtube API and overall front-end design/code. CLICK to see this project's GitHub repository.
                            </div></a>
                          </div>
                        </Card>
                        <Card>
                          <h2>Solo Project - Transcend BJJ</h2>
                          <div class="mainmain">
                            <a href="https://amiclot.github.io/"><img class="egger" src={bjj_img} alt="port_img" />
                            <div class="texter">
                              I created this site early in the Case Western program to practice JQuery, HTML5 and CSS3. The site was a request from a colleague planning to open a Brazilian Jiu Jitsu bussiness. I would later use some of the styling from this project as compoenents in my final fullstack ReactJS app "open-rolls". CLICK to go to Site.
                            </div></a>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </form>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default App;
