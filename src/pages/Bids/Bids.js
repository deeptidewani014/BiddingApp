import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./Bids.css";
import CommonHeader from "../../components/CommonHeader/CommonHeader";

import BidsCard from "../../components/BidsCard/BidsCard";
import timer from "../../assets/bids/cardImg.png";

export default function Home() {
  return (
    <>
      <Container fluid>
        <CommonHeader pagename="AboutUs" linkname="Home / About Us" />
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={4} id="home4">
            <BidsCard
              bidLastDate="01/01/2023"
              image={timer}
              bidName="Aarka Sports"
              bidPrice="45, 00, 000"
            />
          </Col>
          <Col xs={12} md={4} lg={4} id="home4">
            <BidsCard
              bidLastDate="01/01/2024"
              image={timer}
              bidName="Nova"
              bidPrice="10, 00, 000"
            />
          </Col>
          <Col xs={12} md={4} lg={4} id="home4">
            <BidsCard
              bidLastDate="01/01/2025"
              image={timer}
              bidName="Aarka Sports"
              bidPrice="45, 00, 000"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={4} id="home4">
            <BidsCard
              bidLastDate="01/01/2023"
              image={timer}
              bidName="Aarka Sports"
              bidPrice="45, 00, 000"
            />
          </Col>
          <Col xs={12} md={4} lg={4} id="home4">
            <BidsCard
              bidLastDate="01/01/2024"
              image={timer}
              bidName="Nova"
              bidPrice="10, 00, 000"
            />
          </Col>
          <Col xs={12} md={4} lg={4} id="home4">
            <BidsCard
              bidLastDate="01/01/2025"
              image={timer}
              bidName="Aarka Sports"
              bidPrice="45, 00, 000"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={4} id="home4">
            <BidsCard
              bidLastDate="01/01/2023"
              image={timer}
              bidName="Aarka Sports"
              bidPrice="45, 00, 000"
            />
          </Col>
          <Col xs={12} md={4} lg={4} id="home4">
            <BidsCard
              bidLastDate="01/01/2024"
              image={timer}
              bidName="Nova"
              bidPrice="10, 00, 000"
            />
          </Col>
          <Col xs={12} md={4} lg={4} id="home4">
            <BidsCard
              bidLastDate="01/01/2025"
              image={timer}
              bidName="Aarka Sports"
              bidPrice="45, 00, 000"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
