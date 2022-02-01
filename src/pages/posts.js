import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import BlogPost from '../types/pages/blog-post'

const Posts = () => {
  const data = useStaticQuery(graphql`
    query PostsPageQuery {
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

  /** @type {BlogPost[]} posts */
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
