import React from "react";
import { graphql } from "gatsby";
import PostTemplate from "./post-template";
import { CommentCount } from 'gatsby-plugin-disqus';

const SubTitle = ({ ttr, date, author, disqusConfig }) => (
  <h5 className="text-muted mb-5">
    {date} | {author} | <CommentCount config={disqusConfig} placeholder={'No comments'} />
  </h5>
);

export default ({ data }) => {
  // console.debug(data);
  const post = data.mdx;
  // console.log(post.frontmatter.slug);
  const img = data.file.childImageSharp;
  // console.log(img);
  const disqusConfig = {
    url: `https://joelworrall.com/blog/${post.fields.slug}/`,
    identifier: post.id,
    title: post.frontmatter.title,
  }
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <SubTitle
          ttr={post.timeToRead}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
          disqusConfig={disqusConfig}
        />
      }
      featuredImage={img.fluid.src}
      excerpt={post.excerpt}
      html={post.body}
      disqusConfig={disqusConfig}
    />
  );
};

export const query = graphql`
  query($regex: String) {
    mdx(fields: { slug: { regex: $regex } }) {
      body
      frontmatter {
        title
        author
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
      fields {
        slug
      }
    }
    file(
      extension: { eq: "jpg" }
      relativePath: { regex: $regex }
      relativeDirectory: { regex: "/content/blog/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
      relativePath
    }
  }
`;
