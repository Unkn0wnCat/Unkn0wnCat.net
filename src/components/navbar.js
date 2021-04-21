import React from "react"

import { Link } from "gatsby"

import * as styles from "./navbar.module.scss"

function spacerStyle(noSpacer) {
  if(noSpacer) {
    return {height: 0};
  }
  return {};
}

const Navbar = ({ noSpacer = false }) => {
  return (
      <div className={styles.navBarPlaceholder} style={spacerStyle(noSpacer)}>
          <div className={styles.navBar}>
            <nav>
              <Link to={"/"} className={styles.logo}>Unkn0wnCat.net</Link>
              <Link to={"/videos"}>Videos</Link>
            </nav>
          </div>
      </div>
  )
}

export default Navbar
