import React from "react";
import { Container, Image } from "react-bootstrap";
import { PageLayout, PageTitle } from "../components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import SEO from "../utils/seo";
import { Disqus } from "gatsby-plugin-disqus";

export default ({
  title,
  excerpt,
  html,
  subTitle,
  featuredImage,
  disqusConfig,
}) => (
  <PageLayout>
    <SEO title={title} description={excerpt} />
    <Container className="text-center" fluid>
      <PageTitle title={title} />
      {subTitle}
      <Image fluid src={featuredImage} alt={title} />
      <Container style={{ marginTop: "20px" }} className="text-justify">
        <MDXProvider>
          <MDXRenderer>{html}</MDXRenderer>
        </MDXProvider>
        {disqusConfig && <Disqus config={disqusConfig} />}
      </Container>
    </Container>
  </PageLayout>
);
