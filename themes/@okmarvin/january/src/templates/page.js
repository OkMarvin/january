import React from 'react'
import { Block } from 'jsxstyle'
import PageContentHeader from '../components/PageContentHeader'
import Html from '../components/Html'
import Main from '../styled/Main'
class Page extends React.Component {
  render() {
    return (
      <>
        <Main>
          <Block component="article">
            <PageContentHeader {...this.props} />
            <section
              dangerouslySetInnerHTML={{
                __html: this.props.content
              }}
              className="okmarvin-content"
            />
          </Block>
        </Main>
      </>
    )
  }
}
export default props => (
  <Html {...props}>
    <Page {...props} />
  </Html>
)
