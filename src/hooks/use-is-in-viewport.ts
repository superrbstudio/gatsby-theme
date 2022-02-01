import { useCallback, useEffect, useRef, useState } from 'react'

const useIsInViewport = (initial = false) => {
  const [isInViewport, setIsInViewport] = useState(initial)
  const element = useRef(null)
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsInViewport(entry.isIntersecting && entry.intersectionRatio > 0)
        })
      },
      {
        rootMargin: '0px 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    return () => {
      if (observer.current) {
        observer.current.disconnect()
        observer.current = null
      }
    }
  }, [element])

  const waitForObserver = useCallback(async () => {
    if (!observer.current) {
      return setTimeout(waitForObserver, 50)
    }

    return true
  }, [])

  const setRef = useCallback(
    async ref => {
      element.current = ref
      if (ref) {
        await waitForObserver()
        observer.current.observe(ref)
      }
    },
    [element],
  )

  return { isInViewport, setRef }
}

export default useIsInViewport
