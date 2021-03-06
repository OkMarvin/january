import React from 'react'
import Html from '../components/Html'
import PropTypes from 'prop-types'
import Main from '../styled/Main'
import ArchiveItem from '../components/ArchiveItem'
import Pagination from '../components/Pagination'
import PageContentHeader from '../components/PageContentHeader'
import i18n from '../i18n'
class Category extends React.Component {
  render() {
    const { title, posts, site } = this.props
    const { paginate, lang } = site
    return (
      <Main>
        {
          <>
            {
              <PageContentHeader
                title={`${i18n('Category: ', lang)}${title}`}
              />
            }
            {posts.map(d => (
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
Category.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  site: PropTypes.shape({
    paginate: PropTypes.number
  }),
  data: PropTypes.array,
  paginator: PropTypes.object
}
export default props => (
  <Html {...props}>
    <Category {...props} />
  </Html>
)
