import { useState } from "react"
import { Switch } from "./Switch"
import "./App.scss"
import { Screen } from "./Result"
import { Keypad } from "./Keypad"

type Theme = "dark" | "light" | "violet"

export const App = () => {
  const [theme, setTheme] = useState<Theme>("dark")

  const handleTheme = () => {
    if (theme === "dark") setTheme("light")
    if (theme === "light") setTheme("violet")
    if (theme === "violet") setTheme("dark")
  }

  return (
    <div className="app" data-theme={theme}>
      <div className="container">
        <header>
          <h4>calc</h4>
          <Switch theme={handleTheme} />
        </header>
        <Screen />
        <Keypad />
      </div>
    </div>
  )
}
