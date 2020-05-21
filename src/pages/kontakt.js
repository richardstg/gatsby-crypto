import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Contact from "../components/contact/contact"

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Kontakta gärna oss om du har några frågor så återkommer vi inom kort."
      />
      <Contact />
    </Layout>
  )
}

export default ContactPage
