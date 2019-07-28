import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Col, Container, Row } from "reactstrap"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Header from "../components/header"
import ThreeCardDeck from "../components/threeCardDeck"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"

import spaceImage from "../images/space.svg"

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
      <Layout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Hero />
        <Container>
          <SEO title="Home" />
          <Row style={{ marginTop: `100px`, marginBottom: `100px` }}>
            <Col sm={6}>
              <h1>Simple solutions,</h1>
              <h3>enterprise endeavors</h3>
            </Col>
            <Col sm={6}></Col>
          </Row>

          <ThreeCardDeck />
          <Row style={{ marginTop: `100px`, marginBottom: `100px` }}>
            <Col sm={6}>
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <img
                  src={spaceImage}
                  alt="flat art icon design spacesuit rocket-ship"
                ></img>
              </div>
            </Col>
            <Col sm={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
