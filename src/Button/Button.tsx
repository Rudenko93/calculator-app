import "./Button.scss"

interface MyButtonProps {
  span: string
  nameClass?: "default" | "del" | "res" | "equals"
}

export const Button: React.FC<MyButtonProps> = ({
  span,
  nameClass = "default",
}): JSX.Element => {
  return (
    <button className={`btn ${nameClass}`}>
      <span>{span}</span>
    </button>
  )
}
