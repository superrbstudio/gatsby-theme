import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { Layout } from './src/components/layout'

import { repositoryConfigs } from './src/utils/prismicPreviews'

import './src/stylesheets/style.sass'

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    internalLinkComponent={({ href, ...props }) => (
      <Link to={href} {...props} />
    )}
  >
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      <Layout>
        {element}
      </Layout>
    </PrismicPreviewProvider>
  </PrismicProvider>
)
