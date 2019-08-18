import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, } from "gatsby"

// import Header from "./header"
// import "../theme/global.css"

import { Layout, Menu, Icon } from "antd"

const { Header, Content, Footer, Sider } = Layout

const GLayout = ({ children, page }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[page]}>
            <Menu.Item key="1">
              <a href="/">
                <Icon type="home" />
                <span className="nav-text">Home</span>
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/pnjfire">
                <Icon type="video-camera" />
                <span className="nav-text">PnjFire</span>
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="/page-2">
                <Icon type="upload" />
                <span className="nav-text">Page 2</span>
              </a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="/about">
                <Icon type="user" />
                <span className="nav-text">About</span>
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#001529", padding: "0 8px" }}>
            <h1 style={{ color: "white" }}>{data.site.siteMetadata.title}</h1>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <div style={{ maxWidth: 960 }}>{children}</div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            React-dev ©2019 Created by Astro
          </Footer>
        </Layout>
      </Layout>
    )}
  />
)

GLayout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
}

export default GLayout
