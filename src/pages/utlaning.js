import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/lend/intro"
import BlockFi from "../components/lend/blockfi"
import Celsius from "../components/lend/celsius"
import Nexo from "../components/lend/nexo"
import Outro from "../components/lend/outro"

const LendPage = () => {
  return (
    <Layout>
      <SEO
        title="Utlåning"
        description="Låna ut dina kryptovalutor och få ränta på kapitalet. V har valt ut de främsta utlåningstjänsterna som ger högst avkastning och mest trygghet."
      />
      <Intro />
      <BlockFi />
      <Celsius />
      <Nexo />
      <Outro />
    </Layout>
  )
}

export default LendPage
