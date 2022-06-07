import * as React from 'react'
import { graphql } from 'gatsby'
import { Image } from '@superrb/gatsby-addons/components'

export const FullWidthImage = ({ slice }) => (
  <section className="full-width-image content-section">
    <Image image={slice.primary.image} />
  </section>
)

export const query = graphql`
  fragment PageDataBodyFullWidthImage on PrismicPageDataBodyFullWidthImage {
    primary {
      image {
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
    }
  }
  fragment HomepageDataBodyFullWidthImage on PrismicHomepageDataBodyFullWidthImage {
    primary {
      image {
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
    }
  }
`
