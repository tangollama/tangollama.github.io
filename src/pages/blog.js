import React from "react";
import { graphql } from "gatsby";
import { PageLayout, PageTitle, BlogLink } from "../components";
import { SEO, Utils } from "../utils";
import { Container } from "react-bootstrap";

export default ({ data }) => {
  const allFeaturedImages = data.allFile.edges || [];
  const allPosts = data.allMdx.edges || [];
  const regex = /\/[blog].*\/|$/;
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex);
  console.debug(allPosts);
  return (
    <PageLayout>
      <SEO title="Blog" />
      <PageTitle title="Blog">Posts</PageTitle>
      <p>
        When I write something for public, career-focused consumption, it ends
        up here.
      </p>
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
              excerpt={node.excerpt}
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "jpg" }
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
  }
`;
