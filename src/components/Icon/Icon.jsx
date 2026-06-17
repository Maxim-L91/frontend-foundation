import './Icon.scss'
import clsx from 'clsx'
import { Sprite } from 'minista/assets'

export default (props) => {
  const {
    name,
    className,
    hasFill = false,
    ariaLabel,
  } = props

  return (
    <span
      className={clsx('icon', hasFill && 'icon--fill', className)}
      aria-label={ariaLabel}
    >
      <Sprite src={`/src/assets/icons/${name}.svg`} />
    </span>
  )
}
