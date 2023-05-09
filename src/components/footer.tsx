import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { linkResolver } from '../utils/linkResolver'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'
import MainFooter from '../types/main-footer'
import { SiteConfig } from '@superrb/gatsby-addons/types'

const Footer = () => {
  const staticData = useStaticQuery(graphql`
    query MainFooterQuery {
      footer: prismicMainFooter {
        ...MainFooter
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
      footer: MainFooter
      config: SiteConfig
    }
  } = useMergePrismicPreviewData(staticData)

  /** @type {MainFooter} footer */
  const footer = data.footer
  if (!footer) {
    return null
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <h1>Footer</h1>

        <nav className="footer__nav">
          <ul className="footer__nav-list">
            {data.footer.data.navigation_items.map((item, index) => (
              <li className="footer__nav-item" key={index}>
                <Link to={linkResolver(item.link)} className="footer__nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
