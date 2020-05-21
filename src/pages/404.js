import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import NotFound from "../components/404/notFound"

const PageNotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <NotFound />
    </Layout>
  )
}

export default PageNotFound
