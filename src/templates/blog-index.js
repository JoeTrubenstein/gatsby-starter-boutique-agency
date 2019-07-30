import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"

import "./blog-index.css"

import { Container, Col, Row, Toast, ToastBody, ToastHeader } from "reactstrap"

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
        <Header siteTitle={data.site.siteMetadata.title} blogPage></Header>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={siteTitle}
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Hero
            display="Blog"
            lead="the sometimes amusing musings of our team "
          />
          <div
            style={{
              minHeight: `50px`,
            }}
          ></div>
          <Container>
            <Row>
              <Col>
                <div className="grid">
                  {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                      <div className="grid-item" key={node.fields.slug}>
                        <Toast
                          style={{
                            width: `100%`,
                            maxWidth: `none`,
                          }}
                          key={node.fields.slug}
                        >
                          <ToastHeader>
                            <h4>
                              <Link
                                style={{ boxShadow: "none" }}
                                to={node.fields.slug}
                              >
                                {title}
                              </Link>
                            </h4>
                          </ToastHeader>
                          <ToastBody>
                            <small>{node.frontmatter.date}</small>
                            <img className="featured-image" src={node.frontmatter.image} alt={node.frontmatter.alt}></img>
                            <p
                              dangerouslySetInnerHTML={{ __html: node.excerpt }}
                            />
                            <Link to={node.fields.slug}>keep reading</Link>
                          </ToastBody>
                        </Toast>
                      </div>
                    )
                  })}
                </div>
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
                      <a
                        href={`/blog/${i === 0 ? "" : i + 1}`}
                        style={{
                          textDecoration: "none",
                          color: i + 1 === currentPage ? "#ffffff" : "",
                          background: i + 1 === currentPage ? "#007acc" : "",
                        }}
                      >
                        {i + 1}
                      </a>
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
                  <a href={`blog/${prevPage}`} rel="prev">
                    ← Previous Page
                  </a>
                )}
                <br></br>
                {!isLast && (
                  <a href={`blog/${nextPage} `} rel="next">
                    Next Page →
                  </a>
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
            image
            alt
          }
        }
      }
    }
  }
`
