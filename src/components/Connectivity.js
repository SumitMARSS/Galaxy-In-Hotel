import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import railwayIcon from "../Assets/connectivity/station.jpg";
import airportIcon from "../Assets/connectivity/gaya.jpeg";
import busIcon from "../Assets/connectivity/bus stand.png";

// Data for connectivity points
const connectivityData = [
  { name: "Rajgir Bus Stand", image: busIcon, distance: "250 m" },
  { name: "Rajgir Railway Station", image: railwayIcon, distance: "500 m" },
  { name: "Gaya International Airport", image: airportIcon, distance: "70 km" },
];

const Connectivity = () => {
  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        <strong className="purple"> Connectivity </strong>
      </h1>
      <p style={{ color: "white" }}>
        Stay connected effortlessly during your stay at Galaxy Inn. 
      </p>
      {connectivityData.map((point, index) => (
        <Row
          key={index}
          className="d-flex justify-content-center align-items-center mb-3"
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
            {/* Icon/Image Section */}
            <img
              src={point.image}
              alt={point.name}
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
              <h5 style={{ margin: 0 }}>{point.name}</h5>
              <p style={{ margin: 0, color: "#c0c0c0" }}>
                Distance: <b>{point.distance}</b>
              </p>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Connectivity;
