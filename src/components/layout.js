import React from "react"
import PropTypes from "prop-types"

import styles from "./layout.module.scss"
import Navbar from "./navbar"

const Layout = ({ children, noNavSpacer = false }) => {
  return (
      <div className={styles.content}>
          <Navbar noSpacer={noNavSpacer}/>
          {children}
          <footer>&copy; Kevin Kandlbinder | <a href="//kevink.dev/legal/about">Imprint</a> | <a href="//kevink.dev/legal/datasec">Data Protection</a> | <a href={"https://github.com/Unkn0wnCat/Unkn0wnCat.net"}>Source Code</a></footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
