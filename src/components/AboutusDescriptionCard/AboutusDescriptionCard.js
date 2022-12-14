import { data, multiData } from "./data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./AboutusDescriptionCard.css";
import { Col, Container, Row, Button, } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowLeft style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowRight style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};

const AboutusDescriptionCard = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <Container
      className="BootstrapMulti"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <Row style={{ width: "90%" }}>
        {/* <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={responsive}
          slidesToScroll={1}
          dots
          
        >
          {multiData.map((item) => (
            <Card item={item} />
          ))}
        </Slider> */}

        <Carousel partialVisible={true} responsive={responsive}>
          {multiData.map((item) => (
            <Card item={item} />
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

const Card = ({ item }) => {
  return (
    <div
      style={{
        textAlign: "left",
        margin: "0.5rem",
        padding: "10px 10px",
        // width: "260px",
        // height: "300px",
        boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
        borderRadius: 5,
      }}
    >
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "3rem",
          height: "3rem",
          marginBottom: "10px",
          borderRadius: "50%",
          marginTop: "1rem",
        }}
      />
      <p
        style={{
          fontSize: "1rem",
          padding: "1rem 0",
          color: "gray",
          fontWeight: 400,
        }}
      >
        Explore on the world's best & largest Bidding marketplace with our
        beautiful Bidding products. We want to be a part of your smile, success
        and future growth.
      </p>

      <p>
        <span
          style={{
            color: "gray",
            fontWeight: 300,
          }}
        >
          Dinesh Panda
        </span>
      </p>
    </div>
  );
};

export default AboutusDescriptionCard;
