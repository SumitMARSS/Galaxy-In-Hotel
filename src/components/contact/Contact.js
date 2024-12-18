
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import mohanImg from "../../Assets/mohanImg.png";
import gudduImg from "../../Assets/gudduImg.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 0 5rem 0", // Fixed padding
  };

  const containerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 0 15px rgba(128, 0, 128, 0.5)",
    position: "relative", 
    zIndex: 10000,
  };

  const inputStyle = {
    width: "calc(50% - 10px)",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #a334e6",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
  };

  const textareaStyle = {
    width: "calc(100% - 20px)",
    height: "150px",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #a334e6",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
  };

  const submitButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "6rem",
    padding: "5px",
    border: "1px solid #789abc",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    borderRadius: "1rem",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(128, 0, 128, 0.8)",
  };

  const divStyle = {
    width: "calc(100% - 20px)",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "83019f1e-35fa-4ab3-936e-f0f517ac8412");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      
      <Container>
        <Row style={wrapperStyle}>
          <h1 className="project-heading">
            Feel Free to <strong className="purple">Contact Us</strong>
          </h1>
          <p style={{ color: "white", marginBottom: "2rem" }}>
            If you have any questions, feel free to reach out!
          </p>

          {/* contact info */}
          <Container className=" text-white mb-5">
            <Row>
              <Col md={6} className="team-member">
                <h3>Manager</h3>
                <img
                  src={mohanImg} // Add the path to the owner's image
                  alt="Mohan Kumar"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    marginRight: "15px",
                    objectFit: "cover",
                  }}
                />
                <p>
                  Name: <b>Mohan Kumar</b> <br/>
                  Mobile No: <b>8826190381</b>
                </p>
              </Col>
              <Col md={6} className="team-member">
                <h3>Ass. Manager</h3>
                <img
                  src={gudduImg} // Add the path to the manager's image
                  alt="Guddu Kumar"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    marginRight: "15px",
                    objectFit: "cover",
                  }}
                />
                <p>
                  Name: <b>Guddu Kumar</b> <br/>
                  Mobile No: <b>8271574930</b>
                </p>
              </Col>
            </Row>
          </Container>

                {/* email submission */}
          <Col style={containerStyle}>
            <form onSubmit={onSubmit} className="contactInputs" style={formStyle}>
              <div className="flex" style={divStyle}>
                <input
                  type="text"
                  name="username"
                  placeholder="Name"
                  autoComplete="off"
                  required
                  style={inputStyle}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                  style={inputStyle}
                />
              </div>

              <textarea
                name="message"
                cols="50"
                rows="10"
                autoComplete="off"
                placeholder="Enter your message"
                required
                style={textareaStyle}
              ></textarea>

              <button type="submit" style={submitButtonStyle} className="submitButton">
                Send
              </button>
            </form>
            <span>{result}</span>
          </Col>
        </Row>


        {/* need to be updated once map completed */}

        {/* <Row>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Row> */}
      </Container>
    </Container>
  );
};

export default Contact;
