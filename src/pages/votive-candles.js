import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FifthPage = () => (
  <Layout>
    <SEO title="Votive Candles" />
    <h1>Votive Candles</h1>
    <p>This is where Votive Candles</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FifthPage