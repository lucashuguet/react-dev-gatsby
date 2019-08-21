import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "antd"

const Code = () => (
  <Layout page="5">
    <SEO title="Code" />
    <center>
        <h1>Code</h1>
        <br></br>
        <Button type="primary" shape="round" icon="github" size="large" href="https://github.com/lucashuguet/react-dev-gatsby" target="_blank">Afficher le code</Button><br></br><br></br>
        <iframe src="https://ghbtns.com/github-btn.html?user=lucashuguet&repo=react-dev-gatsby&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px" title="star"></iframe>
    </center>
  </Layout>
)

export default Code
