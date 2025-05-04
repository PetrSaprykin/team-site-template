import '@splidejs/splide/dist/css/splide.min.css'

import { Splide } from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { createEffect, For, onCleanup } from 'solid-js'

import settings from '/settings.json' with { type: 'json' };

const products = settings.products;
import styles from './CardSlider.module.css'

function getProductsByMemberId(memberId) {
  const result = []

  products.forEach((product) => {
    Object.entries(product.members).forEach(([id, role]) => {
      if (id == memberId) {
        result.push({
          name: product.name,
          icon: product.icon,
          role: role,
        })
      }
    })
  })

  return result
}

function setupSplide(el, slides, isTablet, isMobile, type, options) {
  const sliderOverflow =
    slides.length >= 3 || (isTablet && slides.length >= 2) || (isMobile && slides.length > 1)

  const defaultOptions = {
    drag: sliderOverflow ? 'free' : false,
    height: '100%',
    type: 'loop',
    clones: sliderOverflow ? 3 : 0,
    wheel: sliderOverflow ? true : false,
    gap: '8px',
    arrows: false,
    autoWidth: true,
    pagination: slides.length <= 5 && isTablet ? true : false,
    autoplay: slides.length > 1 && isTablet ? true : false,

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

  //возобновление автопрокрутки после клика на слайд с проектом
  splide.on('click', () => {
    // уничтожаем текущий автоскролл и монтируем заново чтобы избежать наслаивания скорости прокрутки
    splide.Components.AutoScroll.destroy()
    splide.Components.AutoScroll.mount()
  })

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

  const memberProducts = () => getProductsByMemberId(props.memberId)

  createEffect(() => {
    if (memberProducts().length == 0) return

    splideInstance = setupSplide(
      sliderEl,
      memberProducts(),
      props.isTablet,
      props.isMobile,
      props.type,
      props.options
    )
    onCleanup(() => splideInstance?.destroy())
  })

  return (
    <>
      {!products ? (
        <p class={styles.empty}>Нет проектов</p>
      ) : (
        <div class={`splide ${styles.splide}`} ref={sliderEl}>
          <div class={`splide__track ${styles.splideTrack}`}>
            <ul class={`splide__list ${styles.splideList}`}>
              <For each={memberProducts()}>
                {(product) => {
                  return (
                    <li class={`splide__slide ${styles.slide}`} product-name={product.name}>
                      <div class={styles.productCard}>
                        <img src={product.icon} />
                        <div class={styles.about}>
                          <p class={styles.productName}>{product.name}</p>
                          <p class={styles.role}>{product.role}</p>
                        </div>
                      </div>
                    </li>
                  )
                }}
              </For>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
