import { useState, useCallback, useRef } from "react"
import { Switch } from "./Switch"
import { Screen } from "./Screen"
import { Keypad } from "./Keypad"
import "./App.scss"
import { useOnPressKey } from "./hooks/useOnPressKey"

type Theme = "dark" | "light" | "violet"

export const App = () => {
  const [theme, setTheme] = useState<Theme>("dark")
  const [screen, setScreen] = useState("0")

  const themeRef = useRef<Theme | null>(null)
  themeRef.current = theme

  const screenRef = useRef<string | null>(null)
  screenRef.current = screen

  function compute(fn: string) {
    const result = new Function("return " + fn)()
    return setScreen(String(result))
  }

  const handleTheme = useCallback(() => {
    if (themeRef.current === "dark") setTheme("light")
    if (themeRef.current === "light") setTheme("violet")
    if (themeRef.current === "violet") setTheme("dark")
  }, [])

  const handleKeyPress = useCallback((value: string): string | void => {
    console.log(screenRef.current, value)
    if (typeof screenRef.current !== "string") return
    if (value === "Backspace") value = "reset"
    if (value === "Delete") value = "del"
    if (value === "x") value = "*"
    if (value === "0" && screenRef.current.length === 1) {
      return screenRef.current
    }
    if (
      screenRef.current === "0" &&
      value !== "del" &&
      value !== "reset" &&
      value !== "="
    ) {
      return setScreen(value)
    }
    switch (value) {
      case ".":
      case "+":
      case "-":
      case "/":
      case "*":
        switch (screenRef.current[screenRef.current.length - 1]) {
          case ".":
          case "+":
          case "-":
          case "/":
          case "*":
            return screenRef.current
        }
        return setScreen((prev) => `${prev}${value}`)
    }

    if (value === "reset") {
      setScreen("0")
      return
    }
    if (value === "del") {
      if (screenRef.current === "error") {
        return setScreen("0")
      }
      setScreen((prev) =>
        prev === "0" || prev.length === 1 ? "0" : prev.slice(0, prev.length - 1)
      )
      return
    }
    if (value === "=") {
      try {
        return compute(screenRef.current!)
      } catch (error: unknown) {
        setScreen("error")
      }
    } else setScreen((prev) => `${prev}${value}`)
  }, [])

  useOnPressKey(handleKeyPress, [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "Backspace",
    "=",
    "Delete",
    "Enter",
  ])

  return (
    <div className="app" data-theme={theme}>
      <div className="container">
        <header>
          <h4>calc</h4>
          <Switch theme={handleTheme} />
        </header>
        <Screen screen={screen} />
        <Keypad handleClick={handleKeyPress} />
      </div>
    </div>
  )
}
