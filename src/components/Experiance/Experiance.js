import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./Experiance.css";

function Experience() {
  return (
    <Container fluid className="experiance-section">
      <Particle />
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
        <strong className="purple">My Experience</strong>
      </h1>

      <div className="timeline">
        {/* Experience 1 */}
        <div className="container-timeline left">
        <div className="content">
          <h2 className="purple">Grafixui</h2>
          <p><em>Full Stack Developer Intern</em> <br />
          <strong>June 2024 - August 2024</strong> | Remote - Avadi, Chennai</p>
          <p>
            Developed a movie website by integrating backend and frontend. Focused on debugging and finalizing components.
          </p>
          <p><strong>Tech:</strong> ReactJs, Redux, ExpressJs, NodeJs, MySQL, TailwindCSS</p>
        </div>

        </div>

        {/* Experience 2 */}
        <div className="container-timeline right">
        <div className="content">
          <h2 className="purple">Ashirwad Engicon Group</h2>
          <p><em>Full Stack Developer Intern</em> <br />
          <strong>March 2024 - May 2024</strong> | Remote - Patna, Bihar</p>
          <p>
            Built the website's Beta version with features like authentication, social login, and Cloudinary integration.
          </p>
          <p><strong>Tech:</strong> ReactJs, Redux, ExpressJs, NodeJs, MongoDB, TailwindCSS</p>
        </div>
        </div>
      </div>
    </Container>
  );
}

export default Experience;
