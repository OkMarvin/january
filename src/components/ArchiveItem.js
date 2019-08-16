import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { bps } from '../constants'
import { Col, Inline, InlineBlock } from 'jsxstyle'
import { format } from 'date-fns'
const ArchiveItem = ({ title, datePublished, permalink }) => (
  <Col padding="1rem 0" mediaQueries={bps} borderBottom="1px solid #ddd">
    <InlineBlock color="rgb(118, 118, 118)">
      {format(datePublished, 'YYYY/MM/DD')}
    </InlineBlock>
    <Inline
      props={{
        to: permalink
      }}
      mediaQueries={bps}
      component={Link}
      textDecoration="none"
      fontSize="1rem"
      smFontSize="1.5rem"
      color="#333"
      linkColor="#333"
      hoverTextDecoration="none"
      hoverColor="#af0000"
    >
      {title}
    </Inline>
  </Col>
)
ArchiveItem.propTypes = {
  title: PropTypes.string.isRequired,
  datePublished: PropTypes.number.isRequired,
  permalink: PropTypes.string.isRequired
}
export default ArchiveItem
