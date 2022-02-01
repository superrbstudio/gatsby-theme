import React, { useCallback, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { SkipTo } from './skip-to'
import Header from './header'
import Footer from './footer'

export const Layout = ({ children }) => {
  return (
    <>
      <Helmet>{/* External CSS Stylesheets Here */}</Helmet>
      <SkipTo />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
