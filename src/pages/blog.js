import React from "react"
import { Container, Row, Col } from "reactstrap"
//import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

// // Source from Contentful
// const BlogPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
//         edges {
//           node {
//             title
//             slug
//             publishedDate(formatString: "MMMM Do, YYYY")
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>
//       <Head title="Blog" />
//       <h1>Blog</h1>
//       <h2>Posts</h2>
//       <ol className={blogStyles.posts}>
//         {data.allContentfulBlogPost.edges.map(post => (
//           <li className={blogStyles.post}>
//             <Link to={`/blog/${post.node.slug}`}>
//               <h2>{post.node.title}</h2>
//               <p>{post.node.publishedDate}</p>
//             </Link>
//           </li>
//         ))}
//       </ol>
//     </Layout>
//   )
// }

// Source from filesystem
// const BlogPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             html
//             excerpt
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>
//       <h1>Blog</h1>
//       <h2>Posts</h2>
//       <ol className={blogStyles.posts}>
//         {data.allMarkdownRemark.edges.map(post => (
//           <li className={blogStyles.post}>
//             <Link to={`/blog/${post.node.fields.slug}`}>
//               <h2>{post.node.frontmatter.title}</h2>
//               <p>{post.node.frontmatter.date}</p>
//             </Link>
//           </li>
//         ))}
//       </ol>
//     </Layout>
//   )
// }

// Source from Contentful
const BlogPage = () => {
  return (
    <Layout>
      <Head title="Blog" />
      <Container className={blogStyles.outerWrapper} fluid>
        <Container className={blogStyles.innerWrapper}>
          <Row>
            <Col
              xs={12}
              md={{ size: 8, offset: 2 }}
              className={blogStyles.text}
            >
              <h1 className={blogStyles.title}>Blog</h1>
              <div
                data-sal="slide-up"
                // data-sal="fade"
                data-sal-duration="800"
                data-sal-easing="ease-out-bounce"
              >
                <h4>Kommer snart...</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  )
}

export default BlogPage
