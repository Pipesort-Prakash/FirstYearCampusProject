import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#003e7e`,
      marginBottom: `1.45rem`,
      display: "flex",
      flexDirection: "row"
    }}
  >
    <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
      <img src={require("../images/logo.svg")} style={{ 
        background:"white", width: `300px`, margin:0}}/>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          First year campus coach project
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
