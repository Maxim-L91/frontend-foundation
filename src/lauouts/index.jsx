import { Sprite } from "minista/assets"

export default ({ children }) => {
  return (
    <>
      <Sprite src="/src/assets/icons/donut.svg" />

      { children }
    </>
  )
}