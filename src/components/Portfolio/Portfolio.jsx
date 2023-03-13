import React from "react";
import projects from "../projects.json";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Portfolio(props) {
  return (
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
      <div>
    <Card>
      {projects.map((item, index) => {
        return (
          <div  className="cardContainer" key={item.id}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            <div className="buttonContainer">
               <Button variant="primary" size="lg" active href={item.link}>Website</Button>
              <Button variant="secondary" size="lg" href={item.repo}>GitHub</Button>
              </div>
                                     </Card.Body>
          </div>
        );
      })}
    </Card>
    </div>
    </Col>
    ))}
    </Row>
  );
}

export default Portfolio;
