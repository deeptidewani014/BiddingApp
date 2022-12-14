import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./AboutuscardIcon.css";
function AboutuscardIcon(props) {
  return (
    <Container>
      <Row>
        <Col id="abtuscardicon1" className={props.class}>
          <div className="{props.iconsName}">{props.iconName}</div>
          <div>
            <div>{props.number}</div>
            <div>{props.title}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutuscardIcon;
