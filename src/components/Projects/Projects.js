import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png"
import cart from "../../Assets/Projects/cart.png"
import bitsOfCode from "../../Assets/Projects/weatherApp.png";
import edtech from "../../Assets/Projects/edtech.png";
import social from "../../Assets/Projects/socialMedia.png";
import roomStand1 from "../../Assets/roomDelux/room1.png";
import roomStand2 from "../../Assets/roomDelux/room2.png";
import room2 from "../../Assets/roomDelux/twin.jpg";
import room1 from "../../Assets/roomDelux/room_delux_1.jpg";
import room3 from "../../Assets/roomDelux/room3.jpg";
import room3_1 from "../../Assets/roomDelux/room3_1.jpg";
import hall from "../../Assets/roomDelux/hall.png";
import lobby from "../../Assets/roomDelux/lobby.png";
import reception from "../../Assets/roomDelux/reception_1-transformed.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Rooms Avilable </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here Are a Few Types of Rooms We Serve
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", fontFamily: "Calibri" }}>
  


        <Col md={10} className="project-card">
          <ProjectCard
            imgPath={room3}
            isBlog={false}
            title="Deluxe or Twin Room"
            description={
              <>
                <p>
                  The Deluxe Room provides a premium experience, offering spacious interiors with state-of-the-art amenities. 
                  Enjoy the comfort of air conditioning, a flat-screen TV, a geyser, cozy blankets, and a private balcony.
                </p>
                <ul>
                  <li>AC for ultimate comfort</li>
                  <li>Flat-screen TV</li>
                  <li>Geyser for hot water</li>
                  <li>Cozy Blankets</li>
                  <li>Private Balcony</li>
                  <li>Free Wi-Fi</li>
                  <li>Drawer for storage</li>
                  <li>Private Washroom with shower</li>
                  <li>On-Site Shop</li>
                  <li>Shampoo and Shower Gel provided</li>
                </ul>
              </>
            }
            imageSection={[
              { src: room2 },
              { src: room1 },
              { src: room3 },
              { src: room3_1 },
            ]}
            ghLink="http://www.booking.com/hotel/in/galaxy-in-and-restraunt.html"
            emailLink="hotelgalaxyinnrajgir@gmail.com"
            phoneLink = "8210442057"
          />
        </Col>


        <Col md={10} className="project-card">
          <ProjectCard
            imgPath={roomStand2}
            isBlog={false}
            title="Standard Room"
            description={
              <>
                <p>
                  The Standard Room provides a premium experience, offering spacious interiors with state-of-the-art amenities. 
                  Enjoy the comfort of king/queen size bed, a flat-screen TV, a geyser, cozy blankets, and a private balcony.
                </p>
                <ul>
                  <li>Flat-screen TV</li>
                  <li>Geyser for hot water</li>
                  <li>Cozy Blankets</li>
                  <li>Private Balcony</li>
                  <li>Free Wi-Fi</li>
                  <li>Drawer for storage</li>
                  <li>Private Washroom with shower</li>
                  <li>On-Site Shop</li>
                  <li>Shampoo and Shower Gel provided</li>
                </ul>
              </>
            }
            imageSection={[
              { src: roomStand2 },
              { src: roomStand1 },
              { src: room3 },
              { src: room3_1 },
            ]}
            ghLink="http://www.booking.com/hotel/in/galaxy-in-and-restraunt.html"
            emailLink="hotelgalaxyinnrajgir@gmail.com"
            phoneLink = "8210442057"
          />
        </Col>


        <Col md={10} className="project-card">
          <ProjectCard
            imgPath={reception}
            isBlog={false}
            title="Hall / Lobby / Reception"
            description={
              <>
                
                {/* New Sections for Hall, Lobby, Dining Area */}
                <h5>Hall</h5>
                <p>
                  The Hall offers a spacious area for guests to relax and enjoy various activities. It's equipped with comfortable seating 
                  and a welcoming ambiance.
                </p>
                
                <h5>Lobby</h5>
                <p>
                  Our Lobby area is designed to make you feel at home as soon as you step in, with modern decor and attentive service. 
                  It's the perfect place to relax or meet with others.
                </p>
                
                <h5>Dining Area</h5>
                <p>
                  The Dining Area offers a delightful experience with a variety of cuisines to choose from. Whether you're in the mood 
                  for a hearty meal or a light snack, we have something for everyone.
                </p>
              </>
            }
            imageSection={[
              { src: lobby },
              { src: hall },
              { src: reception },
            ]}
            ghLink="http://www.booking.com/hotel/in/galaxy-in-and-restraunt.html"
            emailLink="hotelgalaxyinnrajgir@gmail.com"
            phoneLink="8210442057"
          />
        </Col>



          

</Row>


      </Container>
    </Container>
  );
}

export default Projects;
