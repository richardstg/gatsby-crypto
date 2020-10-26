import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/index/intro"
import Exchange from "../components/index/exchange"
import Trade from "../components/index/trade"
import Wallet from "../components/index/wallet"
import Lend from "../components/index/lend"

const IndexPage = () => {
  return (
    <Layout indexPage>
      <SEO
        title="Hem"
        description="Vi vill göra det enkelt att investera i kryptovalutor som Bitcoin, Ethereum, och Litecoin. Genom oss hittar du rätt tjänster och produkter för att köpa, trada, förvara och låna ut kryptovalutor."
      />
      <Intro />
      <Exchange />
      <Trade />
      <Wallet />
      <Lend />
    </Layout>
  )
}

export default IndexPage
