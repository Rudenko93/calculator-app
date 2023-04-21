import { useState } from "react"
import "./Switch.scss"

interface ISwitch {
  theme: () => void
}

type Switcher = "8%" | "34%" | "66%"

export const Switch: React.FC<ISwitch> = ({ theme }): JSX.Element => {
  const [switcher, setSwitcher] = useState<Switcher>("8%")

  const handleTheme = () => {
    theme()
    if (switcher === "8%") setSwitcher("34%")
    if (switcher === "34%") setSwitcher("66%")
    if (switcher === "66%") setSwitcher("8%")
  }
  return (
    <div className="wrapper-switch">
      <span>theme</span>

      <div className="switch">
        <div className="numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <div className="switcher-container" onClick={handleTheme}>
          <div className="switcher" style={{ left: switcher }} />
        </div>
      </div>
    </div>
  )
}
