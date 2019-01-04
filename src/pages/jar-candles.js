import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Jar Candles" />
    <h1>Jar Candles</h1>
    <p>This is where Jar Candles will go</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage