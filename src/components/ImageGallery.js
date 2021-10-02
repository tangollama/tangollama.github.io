import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Gallery from "@browniebroke/gatsby-image-gallery";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { regex: "/content/blog/idempotency/images/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(layout: CONSTRAINED)
              full: gatsbyImageData(layout: FULL_WIDTH)
              meta: fixed {
                originalName
              }
            }
          }
        }
      }
    }
  `);
  console.debug("Images!", data);
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp);
  console.debug("Images", images);

  // `images` is an array of objects with `thumb` and `full`
  return (
    <div style={{ marginBottom: "20px" }}>
      <Gallery images={images} imgClass="idempotenceThumb" />
    </div>
  );
};
