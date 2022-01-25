import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";

import * as styles from "./index.module.scss";
import Layout from "../layouts/DefaultLayout";
import { StaticImage } from "gatsby-plugin-image";
import {Steam, Twitch, Twitter, Youtube} from "@icons-pack/react-simple-icons";

const IndexPage = ({ data }) => <Layout topBarHome={true}>
    <div className={styles.heroOuter}>
        <div className={styles.hero}>
            <div className={styles.heroHalo}></div>
            <div className={styles.heroImage}>
                <StaticImage
                    src="../assets/chibi_nobg.png"
                    placeholder="tracedSVG"
                    quality="100"
                    alt="Chibi drawing of Unkn0wnCat created by @Pericote9"
                    fit="contain"
                    layout="constrained"
                />
            </div>
            <div className={styles.heroBoxBg}></div>
            <div className={styles.heroBox}>
                <div>
                    <span className={styles.name}>Unkn0wn&shy;Cat</span>
                    <span className={styles.description}>Gamer, Coder, Video Producer</span>

                    <a href="https://www.youtube.com/channel/UCCoZp-6_P3CVFj4clQ6uaeg" target="_blank" rel="noreferrer"><Youtube/> Unkn0wnCat</a>
                    <a href="https://www.twitch.tv/thatunkn0wncat" target="_blank" rel="noreferrer"><Twitch/> ThatUnkn0wnCat</a>
                    <a href="https://twitter.com/Unkn0wnKevin" target="_blank" rel="noreferrer"><Twitter/> @Unkn0wnKevin</a>
                    <a href="https://steamcommunity.com/id/unkn0wncat" target="_blank" rel="noreferrer"><Steam/> Unkn0wnCat</a>
                    <a href="https://twitter.com/Unkn0wnKevin" target="_blank" rel="noreferrer"><Twitter/> @Unkn0wnKevin</a>
                </div>
            </div>
        </div>
    </div>
</Layout>;

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/home_about.md$/" } }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;

export default IndexPage;
