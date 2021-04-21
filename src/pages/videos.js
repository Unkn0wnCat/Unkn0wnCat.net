import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "./videos.module.scss"

const makeStyle = function(image) {
  return {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .75)), url("+image+")"
  };
}

const VideoPage = ({ data }) => (
  <Layout>
    <SEO title="Videos" />
    <section style={{flexGrow: 1}} className={styles.videos}>
      <div>
        <h1>Videos</h1>
        <div className={styles.videoGrid}>
          {data.allYoutubeVideo.nodes.map((node, index) => (
            <a href={"https://youtu.be/"+node.videoId} style={makeStyle(node.localThumbnail.publicURL)} target={"_blank"} rel={"noreferrer"}>
              <span className={styles.title}>{node.title.replace(/ *\[[^)]*\] */g, "").replace(/\| Unkn0wnCat/g, "")}</span>
              <span className={styles.timeAgo}>{node.publishedAt}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    allYoutubeVideo {
      nodes {
        channelTitle
        title
        videoId
        localThumbnail {
          publicURL
        }
        description
        publishedAt(fromNow: true)
      }
    }
  }
`;

export default VideoPage
