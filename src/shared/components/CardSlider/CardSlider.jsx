import '@splidejs/splide/dist/css/splide.min.css'

import { Splide } from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { createEffect, For, onCleanup } from 'solid-js'

import styles from './CardSlider.module.css'

function setupSplide(el, products, isMobile, type, options) {
  const productsCount = Object.keys(products).length
  const sliderOverflow = productsCount >= 3 || (isMobile && productsCount >= 2)

  console.log(sliderOverflow)

  const defaultOptions = {
    drag: sliderOverflow ? 'free' : false,
    height: '100%',
    type: 'loop',
    clones: sliderOverflow ? 3 : 0,
    wheel: sliderOverflow ? true : false,
    gap: '8px',
    arrows: false,
    pagination: false,
    autoWidth: true,
    classes: {
      pagination: `splide__pagination ${styles.splidePagination}`,
    },
    ...options,
  }

  const splide = new Splide(el, defaultOptions)

  if (type === 'horizontal' && sliderOverflow) {
    splide.mount({ AutoScroll })
  } else {
    splide.mount()
  }

  // обработчик кликов, не исользую onClcick на элементе слайда потому что так не происходит обработка клонов
  splide.on('click', (slide, event) => {
    const clickedSlide = event.target.closest('.splide__slide')
    scrollToProduct(clickedSlide.getAttribute('product-name'))
  })

  //скролл к карточке продукта с подсветкой карточки (.flash-card)
  const scrollToProduct = (name) => {
    const product = document.querySelector(`[card-name="${name}"]`)
    if (!product) return

    product.classList.add('flash-card')

    product.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      product.classList.remove('flash-card')
    }, 1500) // время одной анимаци * кол-во анимаций (500*3 = 1500) (ms)
  }

  return splide
}

export default function CardSlider(props) {
  let sliderEl
  let splideInstance = null

  createEffect(() => {
    if (!props.products) return

    splideInstance = setupSplide(
      sliderEl,
      props.products,
      props.isMobile,
      props.type,
      props.options
    )
    onCleanup(() => splideInstance?.destroy())
  })

  const productList = () => Object.entries(props.products || {})

  return (
    <>
      {!props.products ? (
        <p class={styles.empty}>Нет проектов</p>
      ) : (
        <div class={`splide ${styles.splide}`} ref={sliderEl}>
          <div class={`splide__track ${styles.splideTrack}`}>
            <ul class={`splide__list ${styles.splideList}`}>
              <For each={productList()}>
                {([name, role]) => (
                  <li class={`splide__slide ${styles.slide}`} product-name={name}>
                    <div class={styles.productCard}>
                      <img src="https://pink-darb-33.tiiny.site/logotype.svg" alt="" />
                      <div class={styles.about}>
                        <p class={styles.productName}>{name}</p>
                        <p class={styles.role}>{role}</p>
                      </div>
                    </div>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
