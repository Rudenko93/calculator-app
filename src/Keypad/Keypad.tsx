import { memo } from "react"
import { Button } from "../Button"
import { data } from "../data"
import "./Keypad.scss"

interface IKeypad {
  handleClick: (span: string) => string | void
}

export const Keypad: React.FC<IKeypad> = memo(({ handleClick }) => {
  return (
    <div className="wrapper-keypad">
      {data.map((btn) => (
        <Button span={btn} handleClick={handleClick} key={btn} />
      ))}
    </div>
  )
})
