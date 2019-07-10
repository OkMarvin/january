import React from 'react'
import { Link } from '@reach/router'
import { Block, InlineBlock } from 'jsxstyle'
import i18n from '../i18n'
import PropTypes from 'prop-types'
const Related = ({ data, site: { lang } }) => (
  <>
    {data.length ? (
      <aside>
        <Block component="h2" fontSize="1rem">
          <InlineBlock background="#ffeb3b">
            {i18n('Learn More', lang)}
          </InlineBlock>
        </Block>
        <ul>
          {data.map(link => (
            <li key={link.permalink}>
              <Link to={link.permalink}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    ) : null}
  </>
)
export default Related
Related.defaultProps = {
  data: []
}
Related.propTypes = {
  data: PropTypes.array,
  site: PropTypes.shape({
    lang: PropTypes.string
  })
}
