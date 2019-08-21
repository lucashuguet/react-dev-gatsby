import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => (
  <Layout page="4">
    <SEO title="About" />
    <h1>About page</h1>
    <p>Bla bla.</p>
    <p>{data.site.siteMetadata.title}</p>
    <a href="/">Go back to the homepage</a>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About
