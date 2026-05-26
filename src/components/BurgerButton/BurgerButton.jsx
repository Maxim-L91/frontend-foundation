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
      <span 
        className={clsx('burger-button__line', className)}
        aria-hidden='true'
      >

      </span>
    </button>
  )
}