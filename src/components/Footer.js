import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata;
  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        <b>{author}</b> &copy; {new Date().getFullYear()}.{" "}
        <a href="https://github.com/tangollama/tangollama.github.io">Coded</a>{" "}
        with&nbsp;
        <span className="heart">&nbsp;❤&nbsp;</span> thanks to&nbsp;
        <a href="https://www.gatsbyjs.org/">Gatsby</a> and{" "}
        <a href="https://www.gatsbyjs.com/starters/surudhb/gatsby-personal-site-template">
          Open Source
        </a>
        .
      </span>
    </div>
  );
};
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`;
