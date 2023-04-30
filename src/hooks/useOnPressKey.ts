import { useEffect } from "react"

export const useOnPressKey = (
  callback: Function,
  target: string | string[]
) => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (Array.isArray(target)) {
      const key = target.find((k) => e.key === k)
      console.log(key)
      if (key) callback(key)
      else {
        return
      }
    } else {
      if (target === e.key) {
        callback(target)
      } else {
        return
      }
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])
}
