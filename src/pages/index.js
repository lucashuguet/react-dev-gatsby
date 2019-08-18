import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
// import Image from "../components/image"
import SEO from "../components/seo"
import Bio from "../components/bio"

import { List } from "antd"

const IndexPage = ({ data }) => (
  <Layout page="1">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h2>{node.frontmatter.title}</h2>
        <p>{node.excerpt}</p>
      </div>
    ))} */}
    <Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Helmet>
    <List
      itemLayout="horizontal"
      dataSource={data.allMarkdownRemark.edges}
      renderItem={({ node }) => (
      <List.Item extra={<a href={node.frontmatter.slug}>Read more</a>}>
          <List.Item.Meta
            title={
              <span style={{ fontSize: "2rem" }}>
                <a href={node.frontmatter.slug}>{node.frontmatter.title}</a>
              </span>
            }
            description={
              <p style={{ paddinghrefp: "16px", lineHeight: "1.25" }}>
                {node.excerpt}
              </p>
            }
          />
        </List.Item>
      )}
    />
    <Bio />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
