import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Homepage from '../types/pages/homepage'

const Index = () => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      page: prismicHomepage {
        ...Homepage
      }
    }
  `)

  /** @type {Homepage} page */
  const page = data.page
  if (!page) {
    return null
  }

  const {
    data: { title },
  } = page

  return (
    <>
      <Seo data={page.data} />
      <h1>{title.text}</h1>
    </>
  )
}

export default Index
