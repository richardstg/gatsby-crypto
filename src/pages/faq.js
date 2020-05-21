import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Faq from "../components/faq/faq"

const FaqPage = () => {
  return (
    <Layout>
      <SEO
        title="FAQ"
        description="Läs svaren på de vanligast ställda frågorna för att lära dig mer om oss och vad vi gör."
      />
      <Faq />
    </Layout>
  )
}

export default FaqPage
