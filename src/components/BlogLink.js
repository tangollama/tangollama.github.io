import React from "react";
import { Link } from "gatsby";
import Card from "react-bootstrap/Card";
import { getSrc } from "gatsby-plugin-image";

export default (props) => {
  // console.debug(props);
  return (
    <Card className="card-container" as={Link} to={props.to}>
      <Card.Img src={getSrc(props.featuredImage)} className="h-50" />
      <Card.Body className="pt-3">
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.excerpt}</Card.Text>
      </Card.Body>
    </Card>
  );
};
