import React from 'react'
import { Block, InlineBlock } from 'jsxstyle'
import PropTypes from 'prop-types'
SourceLink.propTypes = {
  site: PropTypes.shape({
    source: PropTypes.string
  }),
  filePath: PropTypes.string
}
function SourceLink(props) {
  return (
    <Block marginTop={50}>
      <InlineBlock
        component="a"
        color="gray"
        borderBottom="1px solid #ccc"
        hoverTextDecoration="none"
        hoverColor="blue"
        hoverBorderBottomColor="blue"
        transition="all 0.3s"
        props={{
          href: props.site.source + props.filePath
        }}
      >
        Edit this page
      </InlineBlock>
    </Block>
  )
}
export default SourceLink
