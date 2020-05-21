import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/wallet/intro"
import Ledger from "../components/wallet/ledger"
import Trezor from "../components/wallet/trezor"
import Exodus from "../components/wallet/exodus"
import Outro from "../components/wallet/outro"

const WalletPage = () => {
  return (
    <Layout>
      <SEO
        title="Plånböcker"
        description="För att dina kryptovalutor ska vara säkra behöver du ordna en trygg förvaring. För att hjälpa dig har vi valt ut de bästa plånböckerna på marknaden."
      />
      <Intro />
      <Ledger />
      <Trezor />
      <Exodus />
      <Outro />
    </Layout>
  )
}

export default WalletPage
