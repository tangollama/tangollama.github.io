import React from "react";
import { graphql } from "gatsby";
import PostTemplate from "./post-template";

const SubTitle = ({ date, author, subTitle }) => (
  <h5 className="text-muted mb-5">
    {subTitle ? <span className="subTitle">{subTitle}</span> : null}
    {date} | {author}
  </h5>
);

export default ({ data }) => {
  // console.debug(data);
  const post = data.mdx;
  // console.log(post.frontmatter.slug);
  const img = data.file.childImageSharp;
  // console.log(img);
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <SubTitle
          subTitle={post.frontmatter.subTitle}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
        />
      }
      featuredImage={img.fluid.src}
      excerpt={post.excerpt}
      html={post.body}
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
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
      relativePath
    }
  }
`;
