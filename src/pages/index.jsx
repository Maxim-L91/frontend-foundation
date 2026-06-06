import BurgerButton from "@/components/BurgerButton"

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
    <div className="wrapper" data-js-overlay-menu="">
      <h1>Hello</h1>
      <p>My brather</p>
      <BurgerButton
         extraAttrs={{
          'data-js-overlay-menu-burger-button': '',
         }}
      />
    </div>
    </>
  )
}
