import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ThirdPage = () => (
  <Layout>
    <SEO title="Tea Lights" />
    <h1>Tea Lights</h1>
    <p>This is where Tea Lights will go</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage