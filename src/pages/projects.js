import React from "react"
import { List, Avatar } from "antd"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Projects = ({ data }) => (
  <Layout page="7">
    <SEO title="Projects" />
    <List bordered itemLayout="vertical" size="large">
      <List.Item key="2048" extra={<img width={272} alt="2048" src="https://res.cloudinary.com/astrolht31/image/upload/v1548265775/img/Screenshot_2019-01-23_2048.png"></img>}>
        <List.Item.Meta avatar={<Avatar alt="avatar" src="https://res.cloudinary.com/astrolht31/image/upload/v1568557158/img/2048-icon.ico"></Avatar>} title={<Link to="/2048">2048</Link>} description="Assemblez les nombres et obtenez la case 2048 !"/>
        Comment jouer : Utilisez les flèches directionnelles pour déplacer les cases. Lorsque 2 cases avec le même nombre sont côte à côte, alors elles s'assemblent en une seule ! La touche R permet de relancer une nouvelle partie. 
      </List.Item>
      <List.Item key="Mario" extra={<img width={272} alt="mario" src="https://res.cloudinary.com/astrolht31/image/upload/v1548423341/img/Screenshot_2019-01-25_Mario_1.png"></img>}>
        <List.Item.Meta avatar={<Avatar alt="avatar" src="https://res.cloudinary.com/astrolht31/image/upload/v1568562787/img/mario-icone.png"></Avatar>} title={<Link to="/mario">Mario</Link>} description="Ceci est un clone de Infinite Mario, écrit en JavaScript pour les navigateurs Web utilisant HTML5."/>
        Comment jouer : Utilisez les flèches directionnelles pour vous déplacer, S pour sauter et rentrer dans un niveau et A pour tirer des boules de feu. 
      </List.Item>
    </List>
  </Layout>
)

export default Projects
