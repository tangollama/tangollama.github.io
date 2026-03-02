import React from "react";
import { Card } from "react-bootstrap";

export default (props) => {
  // console.debug(props);
  return (
    <Card className="card-container" href={props.to} as="a">
      <Card.Img src={props.heroImage} className="h-50" />
      <Card.Body className="pt-3">
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subTitle}
        </Card.Subtitle>
        <Card.Text>{props.excerpt}</Card.Text>
      </Card.Body>
    </Card>
  );
};
