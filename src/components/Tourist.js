import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import naulakha from "../Assets/tourist/naulakha.png";
import kund from "../Assets/tourist/kund.png";
import venuVan from "../Assets/tourist/venu.png";
import pandu from "../Assets/tourist/pandu.png";
import son from "../Assets/tourist/son.png";
import biraytan from "../Assets/tourist/veera.png";
import zoo from "../Assets/tourist/zoo.png";
import nature from "../Assets/tourist/nature.png";
import ghora from "../Assets/tourist/ghora.png";
import ropeway from "../Assets/tourist/rope.png";

// Sample data for tourist places
const touristPlaces = [
    { name: "Naulakha Mandir", image: naulakha, distance: "500 m" },
    { name: "Rajgir Kund", image: kund, distance: "1 km" },
    { name: "VenuVan", image: venuVan, distance: "1 km" },
    { name: "Pandu Pokhar", image: pandu, distance: "1 km" },
    { name: "Son Bhandar", image: son, distance: "1.5 km" },
    { name: "Biraytan", image: biraytan, distance: "1.5 km" },
    { name: "Zoo Safari", image: zoo, distance: "1.5 km" },
    { name: "Nature Safari", image: nature, distance: "1.5 km" },
    { name: "Ropeway", image: ropeway, distance: "3 km" },
    { name: "Ghora Katora", image: ghora, distance: "5 km" },
];

const TouristPlaces = () => {
  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        <strong className="purple"> Tourist Places to visit at Rajgir </strong>
      </h1>
      <p style={{ color: "white" }}>
        Stay connected effortlessly during your stay at Galaxy Inn. 
      </p>
      {touristPlaces.map((place, index) => (
        <Row
          key={index}
          className="d-flex justify-content-center align-items-center mb-4"
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            color: "whitesmoke",
          }}
        >
          <Col
            xs={12} md={8} lg={6} // Adjust column size based on screen size
            className="d-flex align-items-center justify-content-center"
          >
            {/* Image Section */}
            <img
              src={place.image}
              alt={place.name}
              style={{
                width: "120px",
                height: "100px",
                borderRadius: "8px",
                objectFit: "cover",
                marginRight: "15px",
              }}
            />
            {/* Text Section */}
            <div>
              <h5 style={{ margin: 0 }}>{place.name}</h5>
              <p style={{ margin: 0, color: "#6c757d" }}>
                Distance: <b>{place.distance}</b>
              </p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default TouristPlaces;
