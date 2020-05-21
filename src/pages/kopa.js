import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/exchange/intro"
import Coinbase from "../components/exchange/coinbase"
import Bitpanda from "../components/exchange/bitpanda"
import Coinmama from "../components/exchange/coinmama"
import Outro from "../components/exchange/outro"

const ExchangePage = () => {
  return (
    <Layout>
      <SEO
        title="Köpa"
        description="Vi har valt ut de bästa tjänsterna för att köpa kryptovalutor. Med dessa tjänster kan du säkert och enkelt köpa bl.a. Bitcoin, Ethereum och Ripple."
      />
      <Intro />
      <Coinbase />
      <Bitpanda />
      <Coinmama />
      <Outro />
    </Layout>
  )
}

export default ExchangePage
