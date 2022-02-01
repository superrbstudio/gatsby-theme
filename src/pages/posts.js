import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
// import PostsPage from '../types/pages/homepage'

const Posts = () => {
  const data = useStaticQuery(graphql`
    query PostsPageQuery {
      # page: prismicPostsPage {
      #   ...PostsPage
      # }
      posts: allPrismicBlogPost {
        nodes {
          uid
          data {
            title {
              ...RichText
            }
          }
        }
      }
    }
  `)

  const posts = data.posts.nodes
  if (posts.length === 0) {
    return null
  }

  return (
    <>
      {posts.map(({ uid, data: { title } }) => (
        <h1 key={uid}>{title.text}</h1>
      ))}
    </>
  )
}

export default Posts
