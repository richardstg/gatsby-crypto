import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/trade/intro"
import Phemex from "../components/trade/phemex"
import Bybit from "../components/trade/bybit"
import Kraken from "../components/trade/kraken"
import Outro from "../components/trade/outro"

const TradePage = () => {
  return (
    <Layout>
      <SEO
        title="Trading"
        description="Trading av kryptovalutor kräver en pålitlig tradingplattform. Vi har valt ut tradingplattformarna som ger dig bäst förutsättningar för att lyckas."
      />
      <Intro />
      <Phemex />
      <Bybit />
      <Kraken />
      <Outro />
    </Layout>
  )
}

export default TradePage
