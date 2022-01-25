import React, { useState } from "react";

import { graphql } from "gatsby";

import SEO from "../components/seo";

import * as styles from "./videos.module.scss";
import Layout from "../layouts/DefaultLayout";

const makeStyle = function (image) {
    return {
        backgroundImage:
            "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .75)), url(" +
            image +
            ")",
        backgroundColor: "black",
        
    };
};

const VideoPage = ({ data }) => {
    return <Layout>
        <SEO title="Videos" />
        <div className={styles.videos}>
            <div>
                <h1>Videos</h1>
                <div className={styles.videoGrid}>
                    {data.allYoutubeVideo.nodes.map((node, index) => (
                        <a
                            href={"https://youtu.be/" + node.videoId}
                            style={makeStyle(
                                node.localThumbnail
                                    ? node.localThumbnail.publicURL
                                    : "https://source.unsplash.com/Vy2cHqm0mCs/1920x1080"
                            )}
                            target={"_blank"}
                            rel={"noreferrer"}
                            key={node.videoId}
                        >
                            <span className={styles.title}>
                                {node.title
                                    .replace(/ *\[[^)]*\] */g, "")
                                    .replace(/\| Unkn0wnCat/g, "")}
                            </span>
                            <span className={styles.timeAgo}>
                                {node.publishedAt}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </Layout>
}

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

export default VideoPage;
