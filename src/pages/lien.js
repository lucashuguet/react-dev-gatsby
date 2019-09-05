import React from "react"
import Layout from "../components/layout"
// import Helmet from "react-helmet"
// import Image from "../components/image"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { Card, Col, Row } from "antd"

const Lien = ({ data }) => (
  <Layout page="6">
    <SEO title="Lien" keywords={[`gatsby`, `application`, `react`, `Game`, `Jeux`]} />
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Code Pen" bordered={true} size="small" style={{marginTop: "15px"}}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Code Share" bordered={true} size="small" style={{marginTop: "15px"}}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Svelte" bordered={true} size="small" style={{marginTop: "15px"}}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="React" bordered={true} size="small" style={{marginTop: "15px"}}>
              Card content
            </Card>
          </Col>
        </Row>
    <Bio />
  </Layout>
)

export default Lien
