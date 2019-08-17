import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
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
    <List
      itemLayout="horizontal"
      dataSource={data.allMarkdownRemark.edges}
      renderItem={({ node }) => (
      <List.Item extra={<Link to={node.frontmatter.slug}>Read more</Link>}>
          <List.Item.Meta
            title={
              <span style={{ fontSize: "2rem" }}>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </span>
            }
            description={
              <p style={{ paddingTop: "16px", lineHeight: "1.25" }}>
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
