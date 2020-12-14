import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import loadable from '@loadable/component'

import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Repositories from '../components/repositories'

const Layout = loadable(() => import('../components/layout'))

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  opacity: .2;
`

const Home = ({ className, location }) => {
  const title = siteConfig.siteTitle
  const upperTitle = siteConfig.upperTitle
  const { keywords } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={upperTitle}
        keywords={keywords}
      />

      {/* <Hero
        heroImg={siteConfig.siteCover}
        title={title}
      /> */}
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
