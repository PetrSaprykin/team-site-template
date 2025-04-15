import '@splidejs/splide/dist/css/splide.min.css'

import { Splide } from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { createEffect, For, onCleanup } from 'solid-js'

import styles from './CardSlider.module.css'

export default function CardSlider(props) {
    let sliderEl
    let splideInstance = null

    createEffect(() => {
        const projects = props.projects
        const projectsCount = Object.keys(projects).length
        const sliderOverflow = projectsCount >= 4 // 4 - число слайдов которое перестаёт помещаться в контейнер слайдера для desktop версии
        const isMobile = props.isMobile

        const defaultOptions = {
            drag: sliderOverflow || isMobile ? 'free' : false,
            height: '100%',
            type: !sliderOverflow && isMobile ? 'slide' : 'loop',
            perPage: 1,
            clones: sliderOverflow ? 4 : 0,
            gap: '8px',
            arrows: false,
            pagination: false,
            autoWidth: true,
            classes: {
                pagination: `splide__pagination ${styles.splidePagination}`,
            },
            ...props.options,
        }

        if (splideInstance) {
            splideInstance.destroy()
            splideInstance = null
        }

        // проверка на тип слайдера, если горизонтальный и cлайдер переполнен, включаем автоскролл
        // в обратном случае автоскролла не будет, будет использовано autoplay из ...props.option

        if (projects && projectsCount > 0) {
            splideInstance = new Splide(sliderEl, defaultOptions)
            if (props.type == 'horizontal' && sliderOverflow) {
                splideInstance.mount({ AutoScroll })
            } else {
                splideInstance.mount()
            }
        }

        onCleanup(() => splideInstance?.destroy())
    })

    return (
        <>
            {!props.projects ? (
                <p class={styles.empty}>No projects to display</p>
            ) : (
                <div class={`splide ${styles.splide}`} ref={sliderEl}>
                    <div class={`splide__track ${styles.splideTrack}`}>
                        <ul class={`splide__list ${styles.splideList}`}>
                            <For each={Object.entries(props.projects)}>
                                {([name, role]) => (
                                    <li class={`splide__slide ${styles.slide}`}>
                                        <div class={styles.projectCard}>
                                            <img
                                                src="https://pink-darb-33.tiiny.site/logotype.svg"
                                                alt=""
                                            />
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
