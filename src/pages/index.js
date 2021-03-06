import React from "react";
import { graphql } from "gatsby";
// import ThemeContext from "../utils/theme"
import { PageLayout, BlogLink } from "../components";
import { SEO, Utils } from "../utils";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ data }) => {
  const {
    unemployed,
    firstName,
    lastName,
    occupation,
  } = data.site.siteMetadata;
  // const { dark } = useContext(ThemeContext)
  const allFeaturedImages = data.allFile.edges || [];
  const allPosts = data.allMdx.edges || [];
  const regex = /\/[blog].*\/|$/;
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex);
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="600"
          fluid
          src={`../../imgs/bg03.jpg`}
          alt="Joel Worrall"
        />
        {unemployed && (
          <p className="mt-2">
            <b> Hey! I am looking for new opportunities :)</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              marginTop: "10px",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p className="subHeading">{occupation}&nbsp;</p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.github.com/tangollama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="GitHub"
            />
          </a>
          <a
            href="https://linkedin.com/in/jworrall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://www.twitter.com/tangollama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="icons twitter"
              title="Twitter"
            />
          </a>
          <a
            href="mailto:joel@joelworrall.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../joelworrallresume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
      </Container>
      <h2 style={{ marginTop: "50px" }}>The Latest</h2>
      <Container
        fluid
        className="p-3 w-auto text-left d-flex flex-wrap justify-content-center"
      >
        {allPosts.map(({ node }) => (
          <div key={node.id} className="p-3">
            <BlogLink
              to={node.fields.slug}
              featuredImage={featuredImageMap[node.fields.slug]}
              title={node.frontmatter.title}
              subtitle={node.frontmatter.date}
              excerpt={node.frontmatter.excerpt}
            />
          </div>
        ))}
      </Container>
    </PageLayout>
  );
};

export const query = graphql`
  query {
    allMdx(
      limit: 1
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            author
            date(formatString: "DD MMMM, YYYY")
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { in: ["jpg", "png"] }
        relativePath: { regex: "/feature/" }
        relativeDirectory: { regex: "/content/blog/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`;
