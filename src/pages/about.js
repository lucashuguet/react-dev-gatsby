import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const SecondPage = ({ data }) => (
  <Layout page="4">
    <SEO title="About" />
    <h1>About page</h1>
    <p>Bla bla.</p>
    <p>{data.site.siteMetadata.title}</p>
    <Header siteTitle="About" />
    <Link to="/">Go back to the homepage</Link>
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

export default SecondPage
