import { useState } from "react"
import { Switch } from "./Switch/Switch"

export const App = () => {
  const [theme, setTheme] = useState("dark")
  return (
    <div className="app" data-theme={theme}>
      <div className="container">sda</div>
      <button onClick={() => setTheme("dark")}>change theme</button>
      <button onClick={() => setTheme("light")}>change theme</button>
      <button onClick={() => setTheme("violet")}>change theme</button>
      <Switch />
    </div>
  )
}
