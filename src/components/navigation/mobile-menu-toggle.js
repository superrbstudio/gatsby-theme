import { useIsMobile } from '@superrb/gatsby-addons/hooks'
import React, { useCallback, useContext } from 'react'
import { NavContext } from '../../context/nav-context-provider'

const MenuToggle = ({ label, className, ...props }) => {
  const { navOpen, toggleNav } = useContext(NavContext)
  const isMobile = useIsMobile()

  const screenreaderText = navOpen ? 'Close Nav' : 'Open Nav'

  return (
    <button
      className={`menu-toggle ${className}`}
      onClick={() => {
        toggleNav()
      }}
      aria-expanded={navOpen}
      aria-controls="main-nav"
      aria-hidden={!isMobile}
      {...props}
    >
      Open Nav
      <span className="screenreader-text">{screenreaderText}</span>
    </button>
  )
}

export default MenuToggle
