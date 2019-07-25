import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Col, Container, Row } from "reactstrap"

import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Header from "../components/header"
import ThreeCardDeck from "../components/threeCardDeck"
import ContactForm from "../components/contactForm"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero />
        <Container>
          <SEO title="Home" />
          <ThreeCardDeck />
          <Row>
            <Col sm={6}>
              <p>Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
              </div>
              <Link to="/page-2/">Go to page 2</Link>
            </Col>
            <Col sm={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default IndexPage
