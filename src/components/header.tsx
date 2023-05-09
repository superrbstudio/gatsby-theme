import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import MainHeader, { MainHeaderLink } from '../types/main-header'
import { linkResolver } from '../utils/linkResolver'
import { SiteConfig } from '@superrb/gatsby-addons/types'
import { useEventListener, useIsMobile } from '@superrb/gatsby-addons/hooks'
import { MenuToggle } from '@superrb/gatsby-addons/components'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'
import { NavContext } from '@superrb/gatsby-addons/context'

const Header = () => {
  const staticData = useStaticQuery(graphql`
    query MainHeaderQuery {
      header: prismicMainHeader {
        ...MainHeader
      }
      config: prismicSiteConfig {
        ...SiteConfig
      }
    }
  `)
  const {
    data,
    isPreview,
  }: {
    data: {
      header: MainHeader
      config: SiteConfig
    }
    isPreview: boolean
  } = useMergePrismicPreviewData(staticData)

  const isMobile = useIsMobile()
  const { navOpen } = useContext(NavContext)
  const headerElement = useRef(null)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      //If header needs to be sticky, do it here
    })
  }, [])

  useEventListener('scroll', handleScroll, { passive: true })

  /** @type {MainHeader} header */
  const header = data?.header
  if (!header) {
    return null
  }

  /** @type {SiteConfig} config */
  const config = data?.config
  if (!config) {
    return null
  }

  return (
    <header className="main-header" ref={headerElement}>
      <div className="main-header__container">
        <Link to="/" className="main-header__logo">
          Back To Home
        </Link>
        {isMobile && (
          <MenuToggle
            className="main-header__toggle"
            label="Open Nav"
            closeLabel="Close Nav"
            aria-controls="nav"
          />
        )}
        <nav
          id="nav"
          className="main-header__nav nav"
          aria-hidden={isMobile && !navOpen}
        >
          <ul className="nav__list">
            {header.data.navigation_items.map(
              (link: MainHeaderLink, index: number) => (
                <li key={index} className="nav__item">
                  <Link to={linkResolver(link.link)} className="nav__link">
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
