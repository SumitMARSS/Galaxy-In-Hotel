// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Sumit Kumar </span>
//             from <span className="purple"> Rajgir, Bihar.</span>
//             <br />
//              I am a final year student at IIIT kalyani West Bengal
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//           <li className="about-activity">
//             <ImPointRight /> Playing Cricket
//           </li>
//           <li className="about-activity">
//             <ImPointRight /> Watching Movies
//           </li>
//             <li className="about-activity">
//               <ImPointRight /> Reading Tech Blogs
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//           "Always try to learn from previous mistakes"{" "}
//           </p>
//           <footer className="blockquote-footer">Sumit Kumar</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;


import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 style={{ fontSize: "2.6em" }}>
            <span className="purple">GALAXY IN HOTEL & RESTAURANT RAJGIR</span>
          </h1>
          <p className="home-about-body">
            Located near Arunya Gautam Vihar Hotel & Resort, Rajgir Bus Stand, our hotel offers a range of accommodations to suit your needs. Whether you're traveling for business or leisure, our rooms cater to all preferences.
            <br />
            <br />
            We offer both AC and Non-AC rooms, all equipped with modern amenities including:<br/><br/>
            <ul>
              <li className="about-activity"> <ImPointRight /> Flat-screen TV</li>
              <li className="about-activity"> <ImPointRight /> Geyser for hot water</li>
              <li className="about-activity"> <ImPointRight /> Private Balcony with every room</li>
              <li className="about-activity"> <ImPointRight /> 24/7 Front Desk Service</li>
              <li className="about-activity"> <ImPointRight /> Daily Room Service</li>
              <li className="about-activity"> <ImPointRight /> Free Wi-Fi</li>
              <li className="about-activity"> <ImPointRight /> Free Parking </li>
              <li className="about-activity"> <ImPointRight /> 24-Hour Electricity</li>
              <li className="about-activity"> <ImPointRight /> Fresh Towels</li>
              <li className="about-activity"> <ImPointRight /> On-Site Shop </li>
              <li className="about-activity"> <ImPointRight /> Cozy Blankets </li>
              <li className="about-activity"> <ImPointRight /> 18-Hour Restraunt </li>
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

          <p style={{ color: "rgb(155 126 172)" }}>
            "A comfortable stay is the key to a memorable trip"{" "}
          </p>
          <footer className="blockquote-footer">Mohan Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
