import "./Button.scss"

interface MyButtonProps {
  span: string
  handleClick: (span: string) => string | void
}

export const Button: React.FC<MyButtonProps> = ({
  span,
  handleClick,
}): JSX.Element => {
  const changeClassName = () => {
    if (span === "reset") {
      return "res"
    }
    if (span === "del") {
      return "del"
    }
    if (span === "=") {
      return "equals"
    } else {
      return "default"
    }
  }

  return (
    <button
      className={`btn ${changeClassName()}`}
      onClick={() => handleClick(span)}>
      <span>{span}</span>
    </button>
  )
}
