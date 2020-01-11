import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { List, Avatar, Divider } from "antd"

// const Bio = () => (
//   <List.Item>
//     <List.Item.Meta
//       avatar={
//         <Avatar
//           size={64}
//           src="https://pbs.twimg.com/profile_images/1090998219369316352/YKDhei7s_400x400.jpg"
//         />
//       }
//       title={<Link to="/about">Antho Welc</Link>}
//       description="Dév JavaScript | Papa | Autodidacte. Créateur du programme Hardcoders. J’enseigne comment gagner sa vie en créant des sites et apps modernes."
//     />
//   </List.Item>
// )

const Bio = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            bio
            authorImage
          }
        }
      }
    `}
    render={data => (
      <div>
        <Divider orientation="left">Author</Divider>
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar size={64} src="https://res.cloudinary.com/astrolht31/image/upload/c_scale,q_100,w_64/v1548264480/img/IMG_1162.png" alt="avatar" />
              }
              title={<Link to="/about">{data.site.siteMetadata.author}</Link>}
              description={data.site.siteMetadata.bio}
            />
          </List.Item>
        </List>
      </div>
    )}
  />
)

export default Bio
