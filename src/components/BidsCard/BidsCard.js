import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./BidsCard.css";

export default function BidsCard(props) {
  const [countdownDate, setCountdownDate] = useState(
    new Date(`${props.bidLastDate}`).getTime()
  );
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setTime({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col style={{ position: "relative" }}>
            <Image src={props.image} alt="image" id="homecard" />
            <div id="homecard2">
              <Row>
                <Col>
                  <div id="homecard3">{time.days || "0"}</div>
                  <div id="homecard4">days</div>
                </Col>
                <Col>
                  <div id="homecard3">{time.hours || "00"}</div>
                  <div id="homecard4">hours</div>
                </Col>
                <Col>
                  <div id="homecard3">{time.minutes || "00"}</div>
                  <div id="homecard4">minutes</div>
                </Col>
                <Col>
                  <div id="homecard3">{time.seconds || "00"}</div>
                  <div id="homecard4">seconds</div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div id="homecard5">{props.bidName}</div>
        <div id="homecard6">
          Current bid : <span id="homecard7">{props.bidPrice}</span>
        </div>
        <div id="homecard9">
          <Button id="homecard8">Details</Button>
        </div>
      </Container>
    </>
  );
}
