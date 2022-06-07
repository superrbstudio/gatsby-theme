import { graphql } from 'gatsby'
import React from 'react'
import Homepage from '../types/pages/homepage'
import { Seo } from '@superrb/gatsby-addons/components'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'

const Index = ({ data }) => {
  /** @type {Homepage} page */
  const page = data.page
  if (!page) {
    return null
  }

  const {
    data: { page_title },
  } = page

  return (
    <>
      <Seo data={page.data} />
      {page_title && <h1>{page_title}</h1>}
      <SliceZone slices={page.data.body} components={components} />
    </>
  )
}

export const query = graphql`
  query HomepageQuery {
    page: prismicHomepage {
      ...Homepage
    }
  }
`

export default Index
