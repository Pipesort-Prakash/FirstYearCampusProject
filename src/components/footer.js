import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <header
    style={{
      background: `#003e7e`,
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      color: "white",
      textAlign: "center"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        fontSize: 12,
        color: "#ffc423",
        fontFamily:"Open Sans, sans-serif"
      }}
    >
      Laurentian University. Sudbury, Ontario, Canada. All Rights Reserved. © {new Date().getFullYear()}.
    </div>
  </header>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
