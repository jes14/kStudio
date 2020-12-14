import React from 'react'
import styled from 'styled-components'
import siteConfig from '../../data/siteConfig'
import loadable from '@loadable/component'
import SEO from '../components/SEO'
const Layout = loadable(() => import('../components/layout'))

const Home = ({ location }) => {
  const upperTitle = siteConfig.upperTitle
  const { keywords } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={upperTitle}
        keywords={keywords}
      />
      <img src='/images/sample1.jpg'/>
      <img src='/images/sample2.jpg'/>
      <img src='/images/sample3.jpg'/>  
    </Layout>
  )
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077B5;
  }

`
