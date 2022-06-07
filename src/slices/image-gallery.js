import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { Image } from '@superrb/gatsby-addons/components'

export const ImageGallery = ({ slice }) => {
  return (
    <section className="image-gallery content-section">
      <PrismicRichText field={slice.primary.gallery_title.richText} />
      <div className="image-gallery__gallery">
        {slice.items.map((galleryItem, index) => (
          <div className="image-gallery__item" key={`gallery-item=${index}`}>
            <figure className="image-gallery__image">
              <Image image={galleryItem.image} />

              {galleryItem.image_description && (
                <figcaption>{galleryItem.image_description}</figcaption>
              )}
            </figure>

            <p className="image-gallery__link">
              <PrismicLink href={galleryItem.link.url}>
                {galleryItem.link_label}
              </PrismicLink>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyImageGallery on PrismicPageDataBodyImageGallery {
    primary {
      gallery_title
    }
    items {
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
      image_description
      link {
        url
        type
        uid
      }
      link_label
    }
  }
  fragment HomepageDataBodyImageGallery on PrismicHomepageDataBodyImageGallery {
    primary {
      gallery_title
    }
    items {
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
      image_description
      link {
        url
        type
        uid
      }
      link_label
    }
  }
`
