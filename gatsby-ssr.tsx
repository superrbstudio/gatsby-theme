import React, { StrictMode } from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { Layout } from './src/components/layout'

import { repositoryConfigs } from './src/utils/prismicPreviews'

import './src/stylesheets/style.sass'
import { ContextWrapper } from '@superrb/gatsby-addons/components'

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link to={href} {...props} />
      )}
    >
      <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
        <ContextWrapper>
          <Layout>{element}</Layout>
        </ContextWrapper>
      </PrismicPreviewProvider>
    </PrismicProvider>
  </StrictMode>
)
