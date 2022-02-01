import { Page, RichText } from '@superrb/gatsby-addons/types'
import { graphql } from 'gatsby'

interface BlogPost extends Page {
  data:
    | Page['data']
    | {
        title: RichText
        content: RichText
      }
}

export const query = graphql`
  fragment BlogPost on PrismicBlogPost {
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

export default BlogPost
