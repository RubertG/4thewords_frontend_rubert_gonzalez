import { useEffect } from "react"

export const useDisableScroll = (disable) => {
  useEffect(() => {
    document.body.style.overflow = disable ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [disable])
}