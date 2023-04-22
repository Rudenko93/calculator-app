import { Button } from "../Button"
import "./Keypad.scss"

export const Keypad = () => {
  return (
    <div className="wrapper-keypad">
      <Button span={"7"} />
      <Button span={"8"} />
      <Button span={"9"} />
      <Button span={"del"} nameClass="del" />
      <Button span={"4"} />
      <Button span={"5"} />
      <Button span={"6"} />
      <Button span={"+"} />
      <Button span={"1"} />
      <Button span={"2"} />
      <Button span={"3"} />
      <Button span={"-"} />
      <Button span={"."} />
      <Button span={"0"} />
      <Button span={"/"} />
      <Button span={"x"} />
      <Button span={"reset"} nameClass="res" />
      <Button span={"="} nameClass="equals" />
    </div>
  )
}
