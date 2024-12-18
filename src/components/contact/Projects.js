import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Typing Speed Tester.png";
import chatify from "../../Assets/Projects/Password Generator.png";
import bitsOfCode from "../../Assets/Projects/weatherApp.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", fontFamily: "Calibri" }}>
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={chatify}
      isBlog={false}
      title="Password Generator"
      description="Developed a web application for generating secure passwords with customizable options. Implemented a user-friendly interface to specify password length and character types. Integrated features to copy generated passwords to the clipboard with visual feedback."
      ghLink="https://github.com/rohi0004/passwordGenerator"
      demoLink="https://rohi0004.github.io/passwordGenerator/"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={bitsOfCode}
      isBlog={false}
      title="weatherApp"
      description="A dynamic web application delivering real-time weather information through OpenWeatherMap API. Integrated geolocation for automatic updates based on user coordinates. Implemented a robust search functionality for retrieving weather data."
      ghLink="https://github.com/rohi0004/WEATHER-APP"
      demoLink="https://github.com/rohi0004/WEATHER-APP"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={editor}
      isBlog={false}
      title="Typing Speed Tester"
      description="Developed a web app where users can test their typing speed, keep their previous records, and compare. Implemented signIn and signUp page with ForgetPassword feature using MongoDB database."
      ghLink="https://github.com/rohi0004/Typing-Speed-Test"
      demoLink="https://rohi0004.github.io/Typing-Speed-Test/"
    />
  </Col>
</Row>


      </Container>
    </Container>
  );
}

export default Projects;
