import { graphql } from 'gatsby'
import Page from '../page'
import RichText from '../rich-text'

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
