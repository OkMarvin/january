import React from 'react'
import { Block } from 'jsxstyle'
import PageContentHeader from '../components/PageContentHeader'
import Html from '../components/Html'
import Main from '../styled/Main'
import PropTypes from 'prop-types'
import SourceLink from '../components/SourceLink'
function Page(props) {
  return (
    <>
      <Main>
        <Block component="article">
          <PageContentHeader {...props} />
          <section
            dangerouslySetInnerHTML={{
              __html: props.content
            }}
            className="okmarvin-container"
          />
          {props.site.source ? <SourceLink {...props} /> : undefined}
        </Block>
      </Main>
    </>
  )
}
Page.propTypes = {
  content: PropTypes.string,
  site: PropTypes.shape({
    source: PropTypes.string
  })
}
const PageTemplate = props => (
  <Html {...props}>
    <Page {...props} />
  </Html>
)
export default PageTemplate
