import { graphql } from 'gatsby'

interface MainHeader {
  data: {
    navigation_items: Array<{
      label: string
      link: {
        link_type: string
        type: string
        uid: string
        url: string
      }
    }>
  }
}

export const query = graphql`
  fragment MainHeader on PrismicMainHeader {
    data {
      navigation_items {
        label
        link {
          link_type
          type
          uid
          url
        }
      }
    }
  }
`

export default MainHeader
