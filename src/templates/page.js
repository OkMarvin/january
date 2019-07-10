import React from 'react'
import { Block } from 'jsxstyle'
import PageContentHeader from '../components/PageContentHeader'
import Html from '../components/Html'
import Main from '../styled/Main'
import PropTypes from 'prop-types'
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
        </Block>
      </Main>
    </>
  )
}
Page.propTypes = {
  content: PropTypes.string
}
const PageTemplate = props => (
  <Html {...props}>
    <Page {...props} />
  </Html>
)
export default PageTemplate
