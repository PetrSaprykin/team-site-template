import '@splidejs/splide/dist/css/splide.min.css'

import { Splide } from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { createEffect, For, onCleanup } from 'solid-js'

import styles from './CardSlider.module.css'

function setupSplide(el, projects, isMobile, type, options) {
  const projectsCount = Object.keys(projects).length
  const sliderOverflow = projectsCount >= 3 || (isMobile && projectsCount >= 2)

  const defaultOptions = {
    drag: sliderOverflow ? 'free' : false,
    height: '100%',
    type: 'loop',
    perPage: 1,
    clones: sliderOverflow ? 4 : 0,
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
  return splide
}

export default function CardSlider(props) {
  let sliderEl
  let splideInstance = null

  createEffect(() => {
    if (!props.projects) return

    splideInstance = setupSplide(
      sliderEl,
      props.projects,
      props.isMobile,
      props.type,
      props.options
    )
    onCleanup(() => splideInstance?.destroy())
  })

  const projectList = () => Object.entries(props.projects || {})

  return (
    <>
      {!props.projects ? (
        <p class={styles.empty}>There are no projects to display</p>
      ) : (
        <div class={`splide ${styles.splide}`} ref={sliderEl}>
          <div class={`splide__track ${styles.splideTrack}`}>
            <ul class={`splide__list ${styles.splideList}`}>
              <For each={projectList()}>
                {([name, role]) => (
                  <li class={`splide__slide ${styles.slide}`}>
                    <div class={styles.projectCard}>
                      <img src="https://pink-darb-33.tiiny.site/logotype.svg" alt="" />
                      <div class={styles.about}>
                        <p class={styles.projectName}>{name}</p>
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
