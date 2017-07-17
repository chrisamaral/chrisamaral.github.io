import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

require('tachyons/css/tachyons.css')

const Page = ({children, site}) => (
  <div className='code'>
    {children}

    <Helmet>
      <title>{site.siteMetadata.title}</title>
    </Helmet>
  </div>
)

Page.displayName = 'Page'
Page.propTypes = {
  site: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default Page
