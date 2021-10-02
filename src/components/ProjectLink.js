import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import { Container, Badge, Col, Row } from "react-bootstrap";

export default ({ excerpt, featuredImages, tags, title, to }) => {
  return (
    <Container className="text-center">
      <Link to={to} style={{ textDecoration: "none" }}>
        <Row>
          {featuredImages &&
            featuredImages.map((image, i) => (
              <Col key={i}>
                <GatsbyImage image={image} />
              </Col>
            ))}
        </Row>
        <h2 className="mt-5">{title}</h2>
      </Link>
      {tags.map((tag) => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      <p className="pt-3 text-justify">{excerpt}</p>
    </Container>
  );
};
