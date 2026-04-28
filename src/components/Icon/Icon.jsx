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
    variant,
  } = props

  const icon = ICONS[name]

  if (!icon) {
    console.warn(`[Icon] unknown icon: ${name}`)
    return null
  }

  const { id: iconName } = icon

  const defaultVariant = icon.variant ?? "stroke"
  const finalVariant = variant || defaultVariant

  const isFill = finalVariant === "fill"

  return (
    <Sprite
      src={`/src/assets/icons/${iconName}.svg`}
      className={clsx(
        "icon", 
        className,
        {
          "icon--fill": isFill,
          "icon--stroke": !isFill,
        }
      )}
      style={{ 
        color,
        width: size,
        height: size,
      }}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? "img" : "presentation"}
    />
  )
} 