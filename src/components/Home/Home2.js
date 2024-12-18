// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/752.jpg";
// import Tilt from "react-parallax-tilt";
// import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import Particle from "../Particle";
// import { TbBrandBooking } from "react-icons/tb";

// function Home2() {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 850);
//     };

//     // Initialize the state
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Clean up event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Particle />
//       <Container>
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               <span className="purple">GALAXY IN HOTEL & RESTAURANT RAJGIR</span>
//             </h1>
//             <p className="home-about-body">
//               Located near Arunya Gautam Vihar Hotel & Resort, Rajgir Bus Stand, our hotel offers a range of accommodations to suit your needs. Whether you're traveling for business or leisure, our rooms cater to all preferences.
//               <br />
//               <br />
//               We offer both AC and Non-AC rooms, all equipped with modern amenities including:
//               <ul>
//                 <li>Flat-screen TV</li>
//                 <li>Geyser for hot water</li>
//                 <li>Private Balcony with every room</li>
//                 <li>24/7 Front Desk Service</li>
//                 <li>Daily Room Service</li>
//                 <li>Free Wi-Fi</li>
//               </ul>
//               <br />
//               Our room prices range from <b className="purple">₹700-2000</b> for Non-AC rooms and <b className="purple">₹1300-3000</b> for AC rooms, making it an affordable option for all types of guests.
//               <br />
//               <br />
//               Whether you're here for a short stay or an extended visit, we ensure comfort and hospitality that will make your time in Rajgir memorable.
//               <br />
//               <br />
//               <b className="purple">
//                 Book your stay today and experience the best of Rajgir!
//               </b>
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img
//                 src={myImg}
//                 className="img-fluid"
//                 alt="hotel"
//                 style={{
//                   borderRadius: "50%", // Makes the image round
//                   display: "block",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               />
//             </Tilt>
//           </Col>
//         </Row>
        


//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND US ON</h1>
//             <p>Feel free to <span className="purple">connect</span> with us</p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="http://www.booking.com/hotel/in/galaxy-in-and-restraunt.html"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <TbBrandBooking />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href=""
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Home2;



import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/752.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";
import { TbBrandBooking } from "react-icons/tb";
import mohanImg from "../../Assets/mohanImg.png";  // Add actual image path for owner
import gudduImg from "../../Assets/gudduImg.png";  // Add actual image path for manager

function Home2() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 850);
    };

    // Initialize the state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">GALAXY IN HOTEL & RESTAURANT RAJGIR</span>
            </h1>
            <p className="home-about-body">
              Located near Arunya Gautam Vihar Hotel & Resort, Rajgir Bus Stand, our hotel offers a range of accommodations to suit your needs. Whether you're traveling for business or leisure, our rooms cater to all preferences.
              <br />
              <br />
              We offer both AC and Non-AC rooms, all equipped with modern amenities including:
              <ul>
                <li>Flat-screen TV</li>
                <li>Geyser for hot water</li>
                <li>Private Balcony with every room</li>
                <li>24/7 Front Desk Service</li>
                <li>Daily Room Service</li>
                <li>Free Wi-Fi</li>
              </ul>
              <br />
              Our room prices range from <b className="purple">₹700-2000</b> for Non-AC rooms and <b className="purple">₹1500-3000</b> for AC rooms, making it an affordable option for all types of guests.
              <br />
              <br />
              Whether you're here for a short stay or an extended visit, we ensure comfort and hospitality that will make your time in Rajgir memorable.
              <br />
              <br />
              <b className="purple">
                Book your stay today and experience the best of Rajgir!
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="hotel"
                style={{
                  borderRadius: "50%", // Makes the image round
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Tilt>
          </Col>
        </Row>

        {/* Owner and Manager Contact Details */}

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
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
            <p>Feel free to <span className="purple">connect</span> with us</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="http://www.booking.com/hotel/in/galaxy-in-and-restraunt.html"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <TbBrandBooking />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
