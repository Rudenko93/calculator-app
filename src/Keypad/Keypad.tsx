import { Button } from "../Button"
import "./Keypad.scss"

export const Keypad = () => {
  return (
    <div className="wrapper-keypad">
      <Button value={"7"} />
      <Button value={"8"} />
      <Button value={"9"} />
      <Button value={"del"} className="del" />
      <Button value={"4"} />
      <Button value={"5"} />
      <Button value={"6"} />
      <Button value={"+"} />
      <Button value={"1"} />
      <Button value={"2"} />
      <Button value={"3"} />
      <Button value={"-"} />
      <Button value={"."} />
      <Button value={"0"} />
      <Button value={"/"} />
      <Button value={"/"} />
      <Button value={"x"} />
      <Button value={"="} />
    </div>
  )
}
