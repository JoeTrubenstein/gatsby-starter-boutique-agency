import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

import { Container } from "reactstrap"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Layout>
      <div>
        <Container>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </div>
    </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`