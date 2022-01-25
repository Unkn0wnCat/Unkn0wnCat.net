import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import SEO from "../components/seo";

import "../index.scss";
import * as styles from "./DefaultLayout.module.scss";

type LayoutProps = {
    topBarHome?: boolean;
};

const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
    const [isAtTop, setIsAtTop] = useState(false);
    const updateIsAtTop = () => {
        if (typeof window === "undefined") return;

        if (window.scrollY > 25) {
            if (isAtTop) setIsAtTop(false);
        } else {
            if (!isAtTop) setIsAtTop(true);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", updateIsAtTop);
            updateIsAtTop();
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", updateIsAtTop);
            }
        };
    });

    return (
        <div className={styles.layout}>
            <SEO />
            <div
                className={
                    styles.topBar +
                    (props.topBarHome && isAtTop
                        ? " " + styles.transparent
                        : "")
                }
            >
                <nav>
                    <Link to="/" className={styles.logo}>
                        Unkn0wnCat.net
                    </Link>
                    <Link to="/videos">Videos</Link>
                </nav>
            </div>
            <main className={styles.content}>{props.children}</main>
            <footer className={styles.footer}>
                CC-BY-4.0 Kevin Kandlbinder |{" "}
                <a
                    href="https://kevink.dev/legal/imprint"
                    target="_blank"
                    rel="noreferrer"
                >
                    Imprint
                </a>
            </footer>
        </div>
    );
};

export default Layout;
