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
    button_label: string
    button_url: {
      link_type: string
      type: string
      uid: string
      url: string
    }
  }
}

export const query = graphql`
  fragment MainHeader on PrismicMainheader {
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
      button_label
      button_url {
        link_type
        type
        uid
        url
      }
    }
  }
`

export default MainHeader
