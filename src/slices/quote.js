import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

export const Quote = ({ slice }) => (
  <section className="content-section quote">
    <blockquote>
      <PrismicRichText field={slice.primary.quote.richText} />
    </blockquote>
  </section>
)

export const query = graphql`
  fragment PageDataBodyQuote on PrismicPageDataBodyQuote {
    primary {
      quote {
        ...RichText
      }
    }
  }
  fragment HomepageDataBodyQuote on PrismicHomepageDataBodyQuote {
    primary {
      quote {
        ...RichText
      }
    }
  }
`
