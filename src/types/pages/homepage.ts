import { Page, RichText } from '@superrb/gatsby-addons/types'
import { graphql } from 'gatsby'

interface Homepage extends Page {
  data:
    | Page['data']
    | {
        title: RichText
        content: RichText
      }
}

export const query = graphql`
  fragment Homepage on PrismicHomepage {
    _previewable
    id
    uid
    data {
      title {
        ...RichText
      }
      content {
        ...RichText
      }
    }
  }
`

export default Homepage
