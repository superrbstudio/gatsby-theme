import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SiteConfig from '../types/site-config'
import MainHeader from '../types/main-header'
import MenuToggle from './navigation/mobile-menu-toggle'
import { NavContext } from './../context/nav-context-provider'
import useIsMobile from '../hooks/use-is-mobile'
import { linkResolver } from '../utils/linkResolver'

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query MainHeaderQuery {
  //     header: prismicMainheader {
  //       ...MainHeader
  //     }
  //     config: prismicSiteconfig {
  //       ...SiteConfig
  //     }
  //   }
  // `)

  const isMobile = useIsMobile()
  const { navOpen } = useContext(NavContext)
  const headerElement = useRef(null)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      //If header needs to be sticky, do it here
    })
  }, [isMobile, headerElement])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: false })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  // /** @type {MainHeader} header */
  // const header = data?.header
  // if (!header) {
  //   return null
  // }

  // /** @type {SiteConfig} config */
  // const config = data?.config
  // if (!config) {
  //   return null
  // }

  return (
    <header
      className={`main-header ${navOpen ? 'open' : ''}`}
      ref={headerElement}
    >
      <div className="main-header__container">
        <Link to="/" className="main-header__logo">
          Back To Home
        </Link>
        <MenuToggle className="main-header__toggle" label="Open Nav" />
        <div className="main-header__nav" aria-hidden={isMobile && !navOpen}>
        
        </div>
      </div>
    </header>
  )
}

export default Header
