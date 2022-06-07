import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { Image } from '@superrb/gatsby-addons/components'

export const ImageHighlight = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <h2>{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.description.richText} />
      <p>
        <PrismicLink href={slice.primary.link.url}>
          {slice.primary.link_label}
        </PrismicLink>
      </p>
    </div>
    <div className="highlight-right">
      <Image image={slice.primary.featured_image} />
    </div>
  </section>
)

export const query = graphql`
  fragment PageDataBodyImageHighlight on PrismicPageDataBodyImageHighlight {
    primary {
      featured_image {
        fluid {
          base64
          src
        }
        gatsbyImageData(
          layout: CONSTRAINED
          imgixParams: { q: 65 }
          placeholder: BLURRED
          breakpoints: [750, 1080, 1366, 1920, 2048, 2560, 3840, 4096, 5120]
        )
      }
      title
      description {
        ...RichText
      }
      link {
        url
        type
        uid
      }
      link_label
    }
  }
  fragment HomepageDataBodyImageHighlight on PrismicHomepageDataBodyImageHighlight {
    primary {
      featured_image {
        fluid {
          base64
          src
        }
        gatsbyImageData(
          layout: CONSTRAINED
          imgixParams: { q: 65 }
          placeholder: BLURRED
          breakpoints: [750, 1080, 1366, 1920, 2048, 2560, 3840, 4096, 5120]
        )
      }
      title
      description {
        richText
      }
      link {
        url
        type
        uid
      }
      link_label
    }
  }
`
