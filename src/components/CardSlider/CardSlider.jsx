import '@splidejs/splide/dist/css/splide.min.css'

import { Splide } from '@splidejs/splide'
import { createEffect, For, onCleanup } from 'solid-js'

import styles from './CardSlider.module.css'

export default function CardSlider(props) {
    let sliderEl
    let splideInstance = null

    createEffect(() => {
        const defaultOptions = {
            height: '100%',
            type: 'loop',
            perPage: 3,
            gap: '8px',
            arrows: false,
            pagination: false,
            autoWidth: true,
            snap: false,
            wheel: true,
            speed: 1500,
            classes: {
                pagination: `splide__pagination ${styles.splidePagination}`,
            },
            ...props.options,
        }

        const projects = props.projects
        console.log(projects)

        if (splideInstance) {
            splideInstance.destroy()
            splideInstance = null
        }

        if (projects && Object.keys(projects).length > 0) {
            splideInstance = new Splide(sliderEl, defaultOptions)
            splideInstance.mount()
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
