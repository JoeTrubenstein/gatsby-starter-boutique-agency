import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import { Container, Toast, Row, Col } from "reactstrap"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <ParallaxProvider>
        <Header siteTitle={siteTitle} />
        <Layout location={this.props.location} title={siteTitle}>
          <ParallaxBanner
            className="your-class"
            layers={[
              {
                image: `"${post.frontmatter.image}"`,
                amount: 0.9,
              },
            ]}
            style={{
              height: "55vh",
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <div
              style={{
                zIndex: `0`,
                backgroundColor:`white`,
                padding:`1rem`
              }}
            >
              <h1>{post.frontmatter.title}</h1>
            </div>
          </ParallaxBanner>
          <Container>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: `20px`,
              }}
            />
          </Container>
          <Container
            style={{
              display: `flex`,
              width: `100%`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Row>
              <Col>
                <Toast
                  style={{
                    width: `100%`,
                    maxWidth: `none`,
                  }}
                >
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </Toast>
              </Col>
            </Row>
          </Container>
        </Layout>
      </ParallaxProvider>
    )
  }
}

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image
        alt
      }
    }
  }
`
