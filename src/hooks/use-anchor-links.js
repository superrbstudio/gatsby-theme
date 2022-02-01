import { LiveNodeList } from 'live-node-list'
import { useCallback, useEffect, useRef } from 'react'
import scrollToHash from '../utils/scroll-to-hash'

const useAnchorLinks = () => {
  const anchors = useRef()

  const handleClick = useCallback(event => {
    const link = event.currentTarget || event.target
    const hash = link.hash.slice(1)

    const element = document.getElementById(hash)
    if (element) {
      event.preventDefault()
    }
    scrollToHash(hash)
  })

  useEffect(() => {
    anchors.current = new LiveNodeList('a[href^="#"], a[href^="/#"]')
    anchors.current.addEventListener('click', handleClick)

    return () => {
      if (anchors.current) {
        anchors.current.removeEventListener('click', handleClick)
      }
    }
  }, [anchors, handleClick])
}

export default useAnchorLinks
