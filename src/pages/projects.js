import React from "react"
import { List } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({ data }) => (
  <Layout page="4">
    <SEO title="Projects" />
    <List bordered loadMore>
      <List.Item>Coucou</List.Item>
    </List>
  </Layout>
)

export default Projects
