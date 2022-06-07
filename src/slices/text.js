import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

export const Text = ({ slice }) => {
  return (
    <section className={`content-section`}>
      <PrismicRichText field={slice.primary.content.richText} />
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyText on PrismicPageDataBodyText {
    primary {
      content {
        ...RichText
      }
    }
  }
  fragment HomepageDataBodyText on PrismicHomepageDataBodyText {
    primary {
      content {
        ...RichText
      }
    }
  }
`
