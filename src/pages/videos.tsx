import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Layout from "../layout/Layout";

import * as styles from "./videos.module.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const VideosPage: React.FC<PageProps> = ({ data }) => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Videos</h1>
                <div className={styles.videos}>
                    {data.allYoutubeVideo.nodes.map((video) => {
                        return (
                            <a
                                href={`https://youtube.com/watch?v=${video.videoId}`}
                                title={video.title}
                            >
                                <div className={styles.imageContainer}>
                                    <div className={styles.borderBox} />
                                    <GatsbyImage
                                        image={
                                            video.localThumbnail.children[0]
                                                .gatsbyImageData
                                        }
                                        alt={`Video Thumbnail for ${video.title}`}
                                        objectFit={"cover"}
                                    ></GatsbyImage>
                                </div>

                                <div className={styles.info}>
                                    <span className={styles.title}>
                                        {video.title
                                            .replaceAll("| Unkn0wnCat", "")
                                            .trim()}
                                    </span>
                                    <span className={styles.timestamp}>
                                        {video.publishedAt}
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allYoutubeVideo {
            nodes {
                channelTitle
                title
                videoId
                localThumbnail {
                    children {
                        ... on ImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                }
                description
                publishedAt(fromNow: true)
            }
        }
    }
`;

export default VideosPage;

export const Head: HeadFC = () => <title>Videos | Unkn0wnCat.net</title>;
