import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiIntellijidea,
  SiVercel,
} from "react-icons/si";
import { TbBrandVscode  } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandVscode   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea    />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
