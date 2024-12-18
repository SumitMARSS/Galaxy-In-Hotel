import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel"; // Import Carousel component
import { TbBrandBooking } from "react-icons/tb";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Main Image */}
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ marginTop: "1rem", borderRadius: "3rem" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "2rem", fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Image Section (Carousel for sliding images) */}
        {props.imageSection && (
          <div style={{ marginBottom: "1rem" }}>
            <Carousel>
              {props.imageSection.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={`Room Image ${index + 1}`}
                    style={{ borderRadius: "8px", height: "auto", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}

        {/* GitHub Link */}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <TbBrandBooking /> &nbsp; {props.isBlog ? "Blog" : "Booking"}
        </Button>

        {/* Email Link */}
        {!props.isBlog && props.emailLink && (
          <Button
            variant="primary"
            href={`mailto:${props.emailLink}`}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Email
          </Button>
        )}

        {/* Phone Call Link */}
        {!props.isBlog && props.phoneLink && (
          <Button
            variant="primary"
            href={`tel:${props.phoneLink}`}
            style={{ marginLeft: "10px" }}
          >
            📞 &nbsp; Call Now
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
