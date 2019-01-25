import React from 'react'
import Html from '../components/Html'
import PropTypes from 'prop-types'
import Main from '../styled/Main'
import ArchiveItem from '../components/ArchiveItem'
import Pagination from '../components/Pagination'
import PageContentHeader from '../components/PageContentHeader'
import i18n from '../i18n'
class Tag extends React.Component {
  render() {
    const { title, data, siteConfig } = this.props
    const { paginate, lang } = siteConfig
    return (
      <Main>
        {
          <>
            {<PageContentHeader title={`${i18n('Topic: ', lang)}${title}`} />}
            {data.map(d => (
              <ArchiveItem key={d.permalink} {...d} />
            ))}
          </>
        }
        {paginate && this.props.paginator && (
          <Pagination {...this.props.paginator} paginate={paginate} />
        )}
      </Main>
    )
  }
}
Tag.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  siteConfig: PropTypes.shape({
    paginate: PropTypes.number
  }),
  data: PropTypes.array,
  paginator: PropTypes.object
}
export default props => (
  <Html {...props}>
    <Tag {...props} />
  </Html>
)
