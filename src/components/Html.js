import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import '../../node_modules/sanitize.css'
import '../../node_modules/prismjs/themes/prism-okaidia.css'
import '../common.css'
export default class Html extends React.Component {
  static propTypes = {
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
  static defaultProps = {
    description: ''
  }
  render() {
    const { site, permalink } = this.props
    const { title: siteTitle, logo, menu } = site
    return (
      <>
        <Header
          siteTitle={siteTitle}
          menu={menu}
          currentUrl={permalink}
          logo={logo}
        />
        {this.props.children}
        <Footer {...site} />
      </>
    )
  }
}
