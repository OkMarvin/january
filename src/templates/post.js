import React from 'react'
import { Block } from 'jsxstyle'
import PostContentHeader from '../components/PostContentHeader'
import Main from '../styled/Main'
import PostSiblings from '../components/PostSiblings'
import RelatedPost from '../components/RelatedPost'
import Html from '../components/Html'
import PropTypes from 'prop-types'
function Post(props) {
  return (
    <Main>
      <Block component="article">
        <PostContentHeader {...props} />
        <section
          dangerouslySetInnerHTML={{
            __html: props.content
          }}
          className="okmarvin-container"
        />
      </Block>
      {props.related && (
        <RelatedPost data={props.related.slice(0, 5)} site={props.site} />
      )}
      <PostSiblings {...props} />
    </Main>
  )
}
Post.propTypes = {
  related: PropTypes.array,
  site: PropTypes.object,
  content: PropTypes.string
}
export default function PostTemplate(props) {
  return (
    <Html {...props}>
      <Post {...props} />
    </Html>
  )
}
