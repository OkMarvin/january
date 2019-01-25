import React from 'react'
import { Link } from '@reach/router'
import { Block, InlineBlock } from 'jsxstyle'
import i18n from '../i18n'
const Related = ({ data, siteConfig: { lang } }) => (
  <>
    {data.length ? (
      <aside>
        <Block component='h2' fontSize='1rem'>
          <InlineBlock background='#f0d892'>
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
