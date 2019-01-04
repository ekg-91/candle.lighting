import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FourthPage = () => (
  <Layout>
    <SEO title="Scented Candles" />
    <h1>Scented Candles</h1>
    <p>This is where Scented Candles will go</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage