import BurgerButton from '@/components/BurgerButton'

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
        <div className="fonts-secondary">
          <h2 className="title">New fonts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
            veritatis aliquid molestias repudiandae quae explicabo a illo fugit
            magnam id consequatur quia, quas rem. Placeat eum fugit eligendi
            laborum molestiae?
          </p>
        </div>
      </div>
    </>
  )
}
