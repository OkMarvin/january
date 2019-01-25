import React from 'react'
import { Block } from 'jsxstyle'
import PostContentHeader from '../components/PostContentHeader'
import Main from '../styled/Main'
import PostSiblings from '../components/PostSiblings'
import RelatedPost from '../components/RelatedPost'
import Html from '../components/Html'
class Post extends React.Component {
  render () {
    return (
      <Main>
        <Block component='article'>
          <PostContentHeader {...this.props} />
          <section
            dangerouslySetInnerHTML={{
              __html: this.props.content
            }}
            className='okmarvin-content'
          />
        </Block>
        {this.props.related && (
          <RelatedPost data={this.props.related.slice(0, 5)} siteConfig={this.props.siteConfig} />
        )}
        <PostSiblings {...this.props} />
      </Main>
    )
  }
}
export default props => (
  <Html {...props}>
    <Post {...props} />
  </Html>
)
