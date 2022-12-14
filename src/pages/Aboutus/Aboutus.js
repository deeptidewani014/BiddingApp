import React from "react";
import "./Aboutus.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import AboutusBackgroundImage from "../../assets/aboutus/image2.png";
import AboutuscardIcon from "../../components/AboutuscardIcon/AboutuscardIcon";
import Aboutuscard from "../../components/AboutusCard/Aboutuscard";
import { TfiHummer } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { FaSmile } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import CommonHeader from "../../components/CommonHeader/CommonHeader";

import AboutusDescriptionCard from "../../components/AboutusDescriptionCard/AboutusDescriptionCard";
function Aboutus() {
  return (
    <>
      <Container fluid>
        <CommonHeader pagename="AboutUs" linkname="Home / About Us" />
      </Container>
      <Container fluid id="abt3">
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div id="abt4">
                <img
                  src={AboutusBackgroundImage}
                  alt="backgroundImage"
                  id="abt5"
                />
              </div>
            </Col>
            <Col md={6} xs={12}>
              <Row>
                <Col id="abt6">
                  <div id="abt7">WHO WE ARE!</div>
                  <div id="abt8">We Work for Your Incredible Success</div>
                  <div id="abt9">
                    {" "}
                    But getting your own auction site up and running has always
                    required learning complex coding languages, or hiring an
                    expensive design firm for thousands of dollars and months of
                    work.
                  </div>
                  <div id="abt10">
                    <Button variant="primary" size="sm">
                      Contact Us
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col md={12} id="abt11">
                <div id="abt12">Why Choose Us</div>
              </Col>
            </Row>
            <Row>
              <Col md={12} id="abt11">
                <div id="abt13">
                  Explore on the world's best & largest Bidding marketplace with
                  our beautiful Bidding products.We want to be a part of your
                  smile, success and future growth.
                </div>
              </Col>
            </Row>
          </Row>
          <Row style={{ marginTop: "1.5rem" }}>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Best in service"
                number="01"
                class="abtcard1"
              />
            </Col>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Fastest Bid Response"
                number="02"
                class="abtcard2"
              />
            </Col>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Perfect project value"
                number="03"
                class="abtcard1"
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="User friendly interface"
                number="04"
                class="abtcard2"
              />
            </Col>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Market Comparision"
                number="05"
                class="abtcard1"
              />
            </Col>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Strong discussion"
                number="06"
                class="abtcard2"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <AboutusDescriptionCard />
            </Col>
          </Row>
          <Row style={{ marginTop: "1.5rem" }}>
            <Col md={3} id="abtcard">
              <AboutuscardIcon
                iconName={<TfiHummer size={30} />}
                number="2345"
                title="successfulBids"
                id="icons"
                class="iconsName"
              />
            </Col>
            <Col md={3} id="abtcard">
              <AboutuscardIcon
                iconName={<FaHammer size={50} />}
                number="234567 "
                class="iconsName"
              />
            </Col>
            <Col md={3} id="abtcard">
              <AboutuscardIcon
                iconName={<FaSmile size={30} />}
                number="4635"
                title="Happy Clients"
                class="iconsName"
              />
            </Col>
            <Col md={3} id="abtcard">
              <AboutuscardIcon
                iconName={<GrNotes size={30} />}
                number="5555"
                title="Good Reviews"
                class="iconsName"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Aboutus;
