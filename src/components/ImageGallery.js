import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

export default () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
        filter: {
          relativeDirectory: { regex: "/content/blog/idempotency/images/" }
        }
      )  {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxHeight: 270) {
              src
            }
            full: fluid(maxWidth: 1024) {
              src
            }
          }
        }
      }
    }
  }
  `)
  console.debug("Images!", data)
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

  // `images` is an array of objects with `thumb` and `full`
  return <div style={{ marginBottom: '20px'}}><Gallery images={images} imgClass="idempotenceThumb" /></div>
}