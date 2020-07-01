import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import youtubeImage from "../images/assets/youtube.jpg"
import twitchImage from "../images/assets/twitch.jpg"
import twitterImage from "../images/assets/twitter.jpg"
import steamImage from "../images/assets/steam.jpg"

import styles from "./index.module.scss";

const HtmlToReactParser = require('html-to-react').Parser;
let parser = new HtmlToReactParser();

const makeStyle = function(image) {
  return {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url("+image+")"
  };
}

const IndexPage = ({ data }) => (
  <Layout noNavSpacer={true}>
    <SEO title="Home" />
    <div className={styles.hero}>
      <div>
        <span className={styles.title}>Unkn0wnCat</span>
        <span className={styles.subtitle}>Gamer, Coder, Editor</span>
      </div>
    </div>
    <section>
      <div>
        <h1>About me</h1>

        { parser.parse(data.allMarkdownRemark.edges[0].node.html) }
      </div>
    </section>
    <section className={styles.social}>
      <div>
        <h1>Social</h1>
        <div className={styles.socialGrid}>
          <a href="https://www.youtube.com/channel/UCCoZp-6_P3CVFj4clQ6uaeg" rel={"noreferrer"} target={"_blank"} style={makeStyle(youtubeImage)}>
            <span className={styles.handle}>Unkn0wnCat</span>
            <span className={styles.service}>YouTube</span>
          </a>
          <a href="https://www.twitch.tv/thatunkn0wncat" rel={"noreferrer"} target={"_blank"} style={makeStyle(twitchImage)}>
            <span className={styles.handle}>ThatUnkn0wnCat</span>
            <span className={styles.service}>Twitch</span>
          </a>
          <a href="https://twitter.com/unkn0wnkevin" rel={"noreferrer"} target={"_blank"} style={makeStyle(twitterImage)}>
            <span className={styles.handle}>@Unkn0wnKevin</span>
            <span className={styles.service}>Twitter</span>
          </a>
          <a href="https://steamcommunity.com/id/unkn0wncat" rel={"noreferrer"} target={"_blank"} style={makeStyle(steamImage)}>
            <span className={styles.handle}>Unkn0wnCat</span>
            <span className={styles.service}>Steam</span>
          </a>
        </div>
        <small>Images by <a href={"https://unsplash.com/photos/iKdQCIiSMlQ"} rel={"noreferrer"} target={"_blank"}>Wahid Khene</a>, <a href={"https://unsplash.com/photos/-oW0q0iOgBc"} rel={"noreferrer"} target={"_blank"}>Jackson David</a>, <a href={"https://unsplash.com/photos/gHrEvF7Ugb4"} rel={"noreferrer"} target={"_blank"}>Kon Karampelas</a> and <a href={"https://unsplash.com/photos/nCU4yq5xDEQ"} rel={"noreferrer"} target={"_blank"}>Mateo Vrbnjak</a> on Unsplash.</small>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/home_about\\\\.md$/"}}
  ) {
    edges {
      node {
        html
      }
    }
  }
}

`

export default IndexPage
