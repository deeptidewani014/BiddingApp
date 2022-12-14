import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./CommonHeader.css";
import headerimg from "../../assets/aboutus/image2.png";

export default function CommonHeader(props) {
  return (
    <div>
      <Container fluid id="common1">
        <Row>
          <Col>
            <Image src={headerimg} id="common2" />
            <div id="common3">
              <div id="common4">{props.pagename}</div>
              <div id="common5">{props.linkname}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
