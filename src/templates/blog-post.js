import { graphql } from 'gatsby'
import { useState } from 'reinspect'
import React, { useCallback, useEffect } from 'react'
import { RichText } from 'prismic-reactjs'

const BlogPostTemplate = ({ data }) => {
  /** @type {BlogPost} post */
  const post = data.post
  if (!post) {
    return null
  }

  return (
    <>
      <h1>{post.data.title.text}</h1>
      <RichText render={post.data.content.richText} />
    </>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String!) {
    post: prismicBlogPost(id: { eq: $id }) {
      ...BlogPost
    }
  }
`

export default BlogPostTemplate
