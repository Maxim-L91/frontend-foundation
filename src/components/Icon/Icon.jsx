import clsx from "clsx"
import { Sprite } from "minista/assets"
import { ICONS } from "./icons"
import "./Icon.scss"

export default (props) => {
  const {
    className,
    name,
    color = "currentColor",
    size = 24,
    ariaLabel,
  } = props

  const iconId = ICONS[name]

  if (!iconId) {
    console.warn(`[Icon] unknown icon: ${name}`)
    return null
  }

  return (
    <Sprite
      src={`/src/assets/icons/${iconId}.svg`}
      className={clsx("icon", className)}
      style={{ 
        color,
        width: size,
        height: size,
      }}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? "img" : "presentation"}
    />
  )
} 