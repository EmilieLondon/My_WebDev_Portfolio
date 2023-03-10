import React from "react";
import projects from "../projects.json";
import Card from 'react-bootstrap/Card';

function Portfolio(props) {
  return (
    <Card style={{ width: '18rem' }}>

      {projects.map((item, index) => {
        return (
          <div>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} />
      <Card.Body key={item.id}>
              <Card.Title>{item.title}</Card.Title>

         <Card.Text>
         {item.description}
        </Card.Text>
          </Card.Body>

        <Card.Body>
        <Card.Link href="{item.link}">Website</Card.Link>
        <Card.Link href="{item.repo}">GitHub</Card.Link>
        </Card.Body>
        </div>
          );
      })}
    </Card>
    );
    }

   
export default Portfolio;