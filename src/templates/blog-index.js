import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"

import { Container, Card, CardDeck, Col, Row } from "reactstrap"

// Leaving as a class until I can figure out how to pass context from gatsby-node otherwise.
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Layout location={this.props.location} title={siteTitle}>
          {console.log(this.props)}
          <SEO
            title={siteTitle}
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Container>
            <Row>
              <Col>
                <CardDeck>
                  {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                      <Card
                        style={{
                          padding: `5px`,
                        }}
                        key={node.fields.slug}
                      >
                        <h3>
                          <Link
                            style={{ boxShadow: "none" }}
                            to={node.fields.slug}
                          >
                            {title}
                          </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      </Card>
                    )
                  })}
                </CardDeck>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  textAlign: `center`,
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {Array.from({ length: numPages }, (_, i) => (
                    <li
                      key={`pagination-number${i + 1}`}
                      style={{
                        margin: 5,
                      }}
                    >
                      <Link
                        to={`/blog/${i === 0 ? "" : i + 1}`}
                        style={{
                          textDecoration: "none",
                          color: i + 1 === currentPage ? "#ffffff" : "",
                          background: i + 1 === currentPage ? "#007acc" : "",
                        }}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row
              style={{
                textAlign: `center`,
              }}
            >
              <Col>
                {!isFirst && (
                  <Link to={`blog/${prevPage}`} rel="prev">
                    ← Previous Page
                  </Link>
                )}
                <br></br>
                {!isLast && (
                  <Link to={`blog/${nextPage} `} rel="next">
                    Next Page →
                  </Link>
                )}
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
