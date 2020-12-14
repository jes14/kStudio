import React from 'react'
import styled from 'styled-components'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'

const Layout = loadable(() => import('../components/layout'))

const Text = styled.p`
  text-align: center;
`

const About = ({ location }) => (
  <Layout location={location} noCover={true}>
    <SEO title="About" />
    <Hero
      heroImg={withPrefix('/images/404.jpeg')}
      title='About'
    />
    <Wrapper>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tincidunt augue. Ut varius tortor ex, in molestie nisi pretium id. Ut vulputate vitae quam et congue. Fusce convallis, magna eu consectetur congue, eros orci tristique magna, ut convallis sapien mi vel dolor. Phasellus tincidunt est at nisl feugiat ultricies. Maecenas ullamcorper elementum ante sit amet dignissim. Aliquam ultricies elementum vehicula. Integer et dignissim lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ex massa, blandit aliquet iaculis at, rhoncus eget augue. Aliquam at placerat purus, eu mollis est. Integer fermentum turpis mauris, non venenatis arcu tincidunt interdum.

        Nam mollis commodo dapibus. Nulla et aliquet eros, sit amet ullamcorper justo. Quisque auctor tempus leo, ut tincidunt ligula feugiat eget. Nulla accumsan felis mauris, sed pharetra arcu pellentesque sit amet. Maecenas porttitor enim non erat lacinia facilisis. Morbi dapibus erat a magna molestie dignissim. Morbi malesuada massa sit amet est dignissim elementum. Suspendisse ac mauris ut orci laoreet porttitor. Donec non nisi vel sem tempor consectetur. Aenean sed molestie tortor. Etiam iaculis quam nulla, at hendrerit enim gravida non. Nullam lobortis dolor et felis cursus, vitae egestas ipsum posuere. Donec sollicitudin finibus libero quis sollicitudin. Phasellus ut pulvinar justo. Curabitur a eros eget orci auctor mattis eu et nulla.

        Aliquam erat volutpat. Phasellus tincidunt, lacus a pharetra malesuada, purus justo consectetur elit, sit amet vehicula urna justo sit amet leo. Sed in aliquam metus. Integer eu ligula a purus porttitor scelerisque eu id tortor. Aenean sodales vulputate facilisis. Pellentesque vel mattis erat. Pellentesque imperdiet vel felis quis sodales. Fusce nec est a quam malesuada tempus.

        Nunc nulla augue, bibendum id feugiat vel, tincidunt vel sapien. Ut semper risus eget libero elementum ornare. Suspendisse enim sapien, vestibulum at felis sit amet, bibendum feugiat eros. Suspendisse potenti. Cras eget molestie mauris, in congue eros. Praesent eget commodo enim, eget commodo purus. Sed sit amet ligula hendrerit enim aliquam iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.


      </Text>
    </Wrapper>
  </Layout>
)

export default About
