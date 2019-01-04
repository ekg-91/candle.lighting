import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import homepageCandles from '../images/homepage-candles.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to Candle.lighting</p>
    <p>Now go burn some candles or somethin'.</p>
    <div className="container">
      <img src={homepageCandles} alt="candles" />
    </div>
    <Link to="/jar-candles/">Check out these candles!</Link>
  </Layout>
)

export default IndexPage