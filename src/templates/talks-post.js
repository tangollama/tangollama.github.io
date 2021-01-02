import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import { PageLayout, PageTitle } from "../components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import SEO from "../utils/seo";

const SubTitle = ({ subTitle }) => (
  <h5 className="text-muted mb-5">{subTitle}</h5>
);

export default ({ data }) => {
  const post = data.mdx;
  return (
    <PageLayout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      />
      <Container className="text-center" fluid>
        <PageTitle title={post.frontmatter.title} />
        <SubTitle subTitle={post.frontmatter.subTitle} />
        <Container style={{ marginTop: "20px" }} className="text-center">
          <MDXProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </Container>
    </PageLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        subTitle
        author
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
      fields {
        slug
      }
    }
  }
`;
