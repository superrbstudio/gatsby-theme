import { graphql } from 'gatsby'
import Page from '../page'
import RichText from '../rich-text'

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
