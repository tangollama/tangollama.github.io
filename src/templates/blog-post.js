import React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image"
import PostTemplate from "./post-template";
import { CommentCount } from "gatsby-plugin-disqus";

const SubTitle = ({ subTitle, date, author, disqusConfig }) => (
  <h5 className="text-muted mb-5">
    {subTitle ? <span className="subTitle">{subTitle}</span> : null}
    {date} | {author} |{" "}
    <CommentCount config={disqusConfig} placeholder={"No comments"} />
  </h5>
);

export default ({ data }) => {
  // console.debug(data);
  const post = data.mdx;
  // console.log(post.frontmatter.slug);
  const src = getSrc(data.file.childImageSharp);
  // console.log(img);
  const disqusConfig = {
    url: `https://joelworrall.com/blog/${post.fields.slug}/`,
    identifier: post.id,
    title: post.frontmatter.title,
  };
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <SubTitle
          subTitle={post.frontmatter.subTitle}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
          disqusConfig={disqusConfig}
        />
      }
      featuredImage={src}
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
        subTitle
        author
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
      fields {
        slug
      }
    }
    file(
      name: { regex: "/feature/" }
      extension: { in: ["jpg", "png"] }
      relativePath: { regex: $regex }
      relativeDirectory: { regex: "/content/blog/" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      relativePath
    }
  }
`;
