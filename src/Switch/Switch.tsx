import "./Switch.scss"

export const Switch = () => {
  return (
    <div className="WrapperSwitch">
      theme
      <div className="Switch">
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <div className="SwitcherContainer">
          <div className="Switcher" />
        </div>
      </div>
    </div>
  )
}
