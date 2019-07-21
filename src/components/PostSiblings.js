import React from 'react'
import { Col, Block, Inline } from 'jsxstyle'
import { lineHeight, mobileScale, scale } from '../constants'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'
import i18n from '../i18n'
const navTextStyle = {
  color: '#777',
  fontSize: '0.7rem'
}

const PreviousLink = ({ children }) => (
  <Col lineHeight={scale} flex={1} textAlign="left" marginBottom="1rem">
    {children}
  </Col>
)
PreviousLink.propTypes = {
  children: PropTypes.node
}
const NextLink = ({ children }) => (
  <Col lineHeight={scale} flex={1} textAlign="left">
    {children}
  </Col>
)
NextLink.propTypes = {
  children: PropTypes.node
}
PostSiblings.propTypes = {
  newerSibling: PropTypes.object,
  olderSibling: PropTypes.object,
  site: PropTypes.shape({
    lang: PropTypes.string
  })
}
function PostSiblings(props) {
  const {
    newerSibling,
    olderSibling,
    site: { lang }
  } = props
  return (
    <Col
      alignItems="flex-start"
      justifyContent="space-between"
      marginTop={`${lineHeight * 2}rem`}
      paddingTop={`${lineHeight * 1}rem`}
      borderTop="5px dashed #eee"
    >
      {newerSibling && (
        <PreviousLink>
          <Block {...navTextStyle}>{i18n('NEWER', lang)}</Block>
          <div>
            <Inline
              component={Link}
              props={{
                to: newerSibling.permalink
              }}
              fontSize={`${Math.pow(mobileScale, 1)}rem`}
            >
              {newerSibling.title}
            </Inline>
          </div>
        </PreviousLink>
      )}
      {olderSibling && (
        <NextLink to={olderSibling.permalink}>
          <Block {...navTextStyle}>{i18n('OLDER', lang)}</Block>
          <div>
            <Inline
              component={Link}
              props={{
                to: olderSibling.permalink
              }}
              fontSize={`${Math.pow(mobileScale, 1)}rem`}
            >
              {olderSibling.title}
            </Inline>
          </div>
        </NextLink>
      )}
    </Col>
  )
}
export default PostSiblings
