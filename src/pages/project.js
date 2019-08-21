import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Project = ({ data }) => (
  <Layout page="4">
    <SEO title="About" />
    <h1>Project</h1>
    <a href="/projects/2048">2048</a>
  </Layout>
)

export default Project
