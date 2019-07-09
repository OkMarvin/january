import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

// Don't do this: import 'sanitize.css'
// it won't work
import '../../node_modules/sanitize.css'
import '../../node_modules/prismjs/themes/prism-okaidia.css'

import '../common.css'

export default function Html(props) {
  const { site, permalink } = props
  const { title: siteTitle, logo, menu } = site
  return (
    <>
      <Header
        siteTitle={siteTitle}
        menu={menu}
        currentUrl={permalink}
        logo={logo}
      />
      {props.children}
      <Footer {...site} />
    </>
  )
}

Html.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  permalink: PropTypes.string,
  site: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    logo: PropTypes.string,
    menu: PropTypes.array
  })
}
Html.defaultProps = {
  description: ''
}
