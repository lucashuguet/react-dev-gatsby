import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"



const PnjFire = () => (
  <Layout page="2">
    <Helmet>
      <script src="https://apis.google.com/js/client.js" ></script>
      <script src="https://apis.google.com/js/platform.js"></script>
    </Helmet>
    <SEO title="PnjFire" />
    <h1><a href="https://www.youtube.com/channel/UCl4h9XbHQ-kQewcPodiUWVg/?sub_confirmation=1" >PnjFire</a></h1>
    <p>Slt a tous je suis Pnjfire : YouTubeur de 64 abos je fait du fortnite ( fun), mon rêve serai de monter en abonné pouvez-vous m'aider à le réaliser  ? Merci à ce qui vont m'aider dans ce long périple !</p>
    <div class="g-ytsubscribe" data-channelid="UCl4h9XbHQ-kQewcPodiUWVg" data-layout="full" data-count="default"></div>
  </Layout>
)

export default PnjFire
