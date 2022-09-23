import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { Layout } from './src/components/layout'

import { repositoryConfigs } from './src/utils/prismicPreviews'
import NavContextProvider from './src/context/nav-context-provider'

import './src/stylesheets/style.sass'

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    internalLinkComponent={({ href, ...props }) => (
      <Link to={href} {...props} />
    )}
  >
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      <NavContextProvider>
        <Layout>{element}</Layout>
      </NavContextProvider>
    </PrismicPreviewProvider>
  </PrismicProvider>
)

export const onRenderBody = ({ pathname, setBodyAttributes }) => {
  if (pathname === '/') {
    pathname = 'home'
  }

  setBodyAttributes({
    className: `page ${[
      ...pathname
        .split('/')
        .filter((x) => !!x)
        .map((slug) => `page--${slug}`),
    ].join(' ')}`
  })
}
