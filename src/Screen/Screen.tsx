import "./Screen.scss"

interface IScreen {
  screen: string
}

export const Screen: React.FC<IScreen> = ({ screen }): JSX.Element => {
  return (
    <div className="screen-wrapper">
      <div className="screen">{screen}</div>
    </div>
  )
}
