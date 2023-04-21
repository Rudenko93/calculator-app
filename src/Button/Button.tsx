import "./Button.scss"

interface IButtonProps {
  value: string
  className?: "default" | "del" | "reset" | "equals"
}

export const Button: React.FC<IButtonProps> = ({
  value,
  className = "default",
}): JSX.Element => {
  return (
    <button className={`btn ${className}`}>
      <span>{value}</span>
    </button>
  )
}
