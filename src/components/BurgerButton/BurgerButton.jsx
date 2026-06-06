import clsx from "clsx"
import './BurgerButton.scss'

export default (props) => {
  const { className, extraAttrs } = props

  const title = 'Open Menu'

  return (
    <button
      className={clsx('burger-button', className)}
      type="button"
      aria-label={title}
      title={title}
      {...extraAttrs}
    >
      <div className="burger-button__wrapper">
        <span className="top" aria-hidden='true'></span>
        <span className="middle" aria-hidden='true'></span>
        <span className="bottom" aria-hidden='true'></span>
      </div>
    </button>
  )
}