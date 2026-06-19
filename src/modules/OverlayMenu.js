class OverlayMenu {
  selectors = {
    root: '[data-js-overlay-menu]',
    overlay: '[data-js-mobile-menu-overlay]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    )
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.overlayElement.classList.toggle(this.stateClasses.isActive)
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
  }
}

export default OverlayMenu
