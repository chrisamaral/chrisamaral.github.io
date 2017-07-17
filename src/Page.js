import React from 'react'
import PropTypes from 'prop-types'
import Head from './Head'

const Page = ({children}) => (
  <div className='code'>
    {children}
    <Head />
  </div>
)

Page.displayName = 'Page'
Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
