import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'
import previewImage from '../images/hiking-left.jpg'

const Layout = ({ children}) => {


  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              url
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'An introduction site' },
              { name: 'keywords', content: 'software development, full stack, Gatsby' },
              { property:'og:image', content: data.site.siteMetadata.url + `${previewImage}`},
              { property:'og:title', content: "Aaron's Software portfolio"},
              { property:'og:type', content: 'website' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {children}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
