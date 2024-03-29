import { graphql } from 'gatsby'
import { Page } from '@superrb/gatsby-addons/types'

interface ContactPage extends Page {
  data: Page['data']
}

export const query = graphql`
  fragment ContactPage on PrismicContactPage {
    _previewable
    uid
    id
    lang
    type
    tags
    first_publication_date
    last_publication_date
    alternate_languages {
      ...AlternateLanguage
    }

    data {
      page_title

      meta_description
      meta_navigation_title
      meta_robots
      meta_title
      meta_image {
        alt
        fluid(
          imgixParams: { q: 75, auto: "compress", fm: "webp" }
          srcSetBreakpoints: [25, 750, 1080, 1366, 1920, 2560, 3840, 4096, 5120]
        ) {
          base64
          src
          srcSet
        }
      }
    }
  }
`

export default ContactPage
