import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import styles from '../styles/components/header.module.css'

const Header = ({ siteTitle }) => (
  <AppBar position="static">
    <Toolbar>
      <Link to="/" className={styles.titleLink}>
        <h1>{siteTitle}</h1>
      </Link>
    </Toolbar>
  </AppBar>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
