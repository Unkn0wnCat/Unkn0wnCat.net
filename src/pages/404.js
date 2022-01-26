import React from "react";

import { Link } from "gatsby";

import SEO from "../components/seo";
import Layout from "../layouts/DefaultLayout";

import * as styles from "./404.module.scss";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div className={styles.containerBox}>
            <h1>404: NOT FOUND</h1>
            <p>
                You just found a path we couldn't find a page for... :(
                <br />
                Perhaps you should try going <Link to={"/"}>home</Link>.
            </p>
        </div>
    </Layout>
);

export default NotFoundPage;
