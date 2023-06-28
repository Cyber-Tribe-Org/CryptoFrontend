import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Slider = ({ slideImages }) => {
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center"
        >
            <Row>
                <Col xs={12} md={12} lg={11} className="mx-auto">
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showIndicators={true}
                        showThumbs={false}
                        autoPlay={true}
                        interval={5000}
                        infiniteLoop={true}
                        stopOnHover={false}
                        emulateTouch={true}
                        width="auto" // Adjust the width as per your requirement
                    >
                        {slideImages.map((slide, index) => (
                            <div key={index}>
                                <img src={slide} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Slider;
