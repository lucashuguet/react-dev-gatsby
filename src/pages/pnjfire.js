import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Youtube from "better-youtube-api"
const _youtube = new Youtube("AIzaSyBJUt-CKm0rbp59ABVnLru_n8GE1ppNDec", { cache: false })
const pnjfire = _youtube.getChannel('UCl4h9XbHQ-kQewcPodiUWVg')
// const pnjstring = pnjfire
// const cc = JSON.stringify(pnjstring)
console.log(pnjfire)

const PnjFire = () => (
  <Layout page="2">
    <SEO title="PnjFire" />
    <h1><a href="https://www.youtube.com/channel/UCl4h9XbHQ-kQewcPodiUWVg/?sub_confirmation=1" >PnjFire</a></h1>
    <p>Slt a tous je suis Pnjfire : YouTubeur de 64 abos je fait du fortnite (fun), mon rêve serai de monter en abonné pouvez-vous m'aider à le réaliser  ? Merci à ce qui vont m'aider dans ce long périple !</p>
    {/* <p>{pnjfire}</p> */}
    <div className="g-ytsubscribe" data-channelid="UCl4h9XbHQ-kQewcPodiUWVg" data-layout="full" data-count="default"></div>
  </Layout>
)

export default PnjFire
