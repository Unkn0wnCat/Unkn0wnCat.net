import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            <span>Unkn0wnCat.net</span>
        </div>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Unkn0wnCat.net</title>;
