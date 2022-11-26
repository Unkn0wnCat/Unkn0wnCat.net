import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layout/Layout";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <div className={styles.chibi}>
                        <div className={styles.imgWrapper}>
                            <StaticImage
                                src="../images/chibi_nobg.png"
                                placeholder="blurred"
                                quality={80}
                                alt="Chibi drawing of Unkn0wnCat created by @Pericote9"
                                layout="constrained"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <span className={styles.infoTitle}>Unkn0wnCat</span>
                        <div className={styles.impactLine} />
                        <span className={styles.tagLine}>
                            Gamer - Coder - Video Producer
                        </span>
                        <div className={styles.impactLine} />
                        <div className={styles.links}>
                            <a
                                href="https://www.youtube.com/channel/UCCoZp-6_P3CVFj4clQ6uaeg"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Unkn0wnCat
                            </a>
                            <a
                                href="https://www.twitch.tv/thatunkn0wncat"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ThatUnkn0wnCat
                            </a>
                            <a
                                href="https://steamcommunity.com/id/unkn0wncat"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Unkn0wnCat
                            </a>
                            <a
                                href="https://kreig.de/de/members/75eec884-c9fc-4626-82bd-f0fdaaa1a4c0"
                                target="_blank"
                                rel="noreferrer"
                            >
                                My Clan (KREIG)
                            </a>
                        </div>
                        <div className={styles.impactBox} />
                    </div>
                </div>

                <a
                    className={styles.artCredit}
                    href="https://twitter.com/Pericote9"
                    target="_blank"
                    rel="noopener"
                >
                    Chibi drawn by @Pericote9
                </a>
            </div>
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Unkn0wnCat.net</title>;
