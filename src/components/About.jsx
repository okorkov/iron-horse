import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

const About = (props) => {
  return (
    <div id="about" >
      <Container >
        <Row>
          <Col>
            <img src={(props.data)? props.data.about_image: "https://live.staticflickr.com/65535/51175695010_8173e223cb_c.jpg"}
              className="avatar" alt="Charles Gehrig"
            />
          </Col>
          <Col xs={8}>
            <p className="about-text">
              { (props.data)?
                props.data.about_text:
                `Thanks for stopping by! We are a small, full service, family-
                owned wood business based in Fairfax, California. We specialize in
                custom, reclaimed wood projects from sustainable, local sources. It is a
                blessing to live in Northern California, with such a wide variety of species.
                We also specialize in esoteric species from around the world. All of our
                wood is one hundred percent reclaimed, and handpicked by our
                specialists; only the top twenty percent making the cut. Most of our
                projects are custom; created to the client&#39;s specification, and completely
                tailored to your liking! We always have a nice, rotating inventory as well if
                you would like to do your own project. We are a full-service wood mill,
                and offer planing, sanding, and milling services; collaborating with a local
                Master Metalsmith if needed. Feel free to reach out, and let&#39;s talk about
                your next project!`
              }
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
