import React from 'react'
import PropTypes from 'prop-types'
import Meta from './Meta'
import { bps, maxWidth } from '../constants'
import BackToTop from './BackToTop'
import { Block, Row, Inline, InlineBlock } from 'jsxstyle'
import slug from '@okmarvin/slug'
import { Link as Lin } from '@reach/router'
const Link = ({ children, ...rest }) => (
  <Inline
    component="a"
    marginRight={10}
    color="rgb(0, 51, 204)"
    props={{ ...rest }}
  >
    {children}
  </Inline>
)
const Footer = ({
  tags = {},
  feed,
  url,
  author,
  github,
  twitter,
  rss,
  theme
}) => (
  <>
    <Block background="#f8f8f8" paddingTop={50} paddingBottom={50}>
      {Object.keys(tags).map(tag => (
        <InlineBlock
          component={Lin}
          margin={5}
          padding={5}
          background="#0c2340"
          color="#fff"
          key={tag}
          props={{
            to: `/topics/${encodeURIComponent(slug(tag))}/`
          }}
        >
          {tag}
        </InlineBlock>
      ))}
    </Block>
    <Block
      component="footer"
      paddingTop="3rem"
      paddingBottom="3rem"
      paddingLeft="1em"
      paddingRight="1em"
      background="#fafafa"
      color="#444"
      borderTop="1px solid #f0f0f0"
      borderBottom="1em solid #ffd54f"
      smBorderBottom="0.5em solid #ffd54f"
      mediaQueries={bps}
      lgPaddingLeft={0}
      lgPaddingRight={0}
    >
      <Block
        maxWidth={maxWidth}
        marginLeft="auto"
        marginRight="auto"
        padding="1em 0"
      >
        <Row alignItems="center" marginBottom="1em" fontSize="0.889em">
          {github ? (
            <Link href={`https://github.com/${github}`}>Github</Link>
          ) : null}
          {twitter ? (
            <Link href={`https://twitter.com/${twitter}`}>Twitter</Link>
          ) : null}
          {rss && <Link href={url + '/feed.xml'}>RSS</Link>}
        </Row>
        <Meta author={author} theme={theme} />
        <BackToTop />
      </Block>
    </Block>
  </>
)
Footer.propTypes = {
  author: PropTypes.string.isRequired,
  github: PropTypes.string,
  twitter: PropTypes.string,
  rss: PropTypes.bool,
  theme: PropTypes.string.isRequired
}
Footer.defaultProps = {
  author: '',
  github: '',
  twitter: ''
}
export default Footer
