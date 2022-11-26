import { Link } from "gatsby";
import React from "react";

import "../index.scss";
import * as styles from "./Layout.module.scss";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <div className={styles.layout}>
            <div className={styles.navigation}>
                <nav>
                    <Link to="/" className={styles.logo}>
                        Unkn0wnCat.net
                    </Link>
                    <Link to="/videos">Videos</Link>
                </nav>
                <div className={styles.navigationBorder} />
            </div>
            <div role="main" className={styles.main}>
                {children}
            </div>
            <footer>
                &copy; CC-BY-4.0 Kevin Kandlbinder |{" "}
                <a
                    href="https://kevink.dev/legal/about"
                    target="_blank"
                    rel="noreferer"
                >
                    Imprint
                </a>
            </footer>
        </div>
    );
};

export default Layout;
