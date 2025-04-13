import '@splidejs/splide/dist/css/splide.min.css'

import { Splide } from '@splidejs/splide'
import { onCleanup, onMount } from 'solid-js'

import styles from './CardSlider.module.css'

export default function CardSlider(props) {
    let sliderEl

    onMount(() => {
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

        const splideInstance = new Splide(sliderEl, defaultOptions)
        splideInstance.mount()

        onCleanup(() => splideInstance?.destroy())
    })

    return (
        <div class={`splide ${styles.splide}`} ref={sliderEl}>
            <div class={`splide__track ${styles.splideTrack}`}>
                <ul class={`splide__list ${styles.splideList}`}>
                    <li class={`splide__slide ${styles.slide}`}>
                        <div class={styles.projectCard}>
                            <img src="" alt="" />
                        </div>
                    </li>
                    <li class={`splide__slide ${styles.slide}`}>
                        <div class={styles.projectCard}>
                            <img src="" alt="" />
                        </div>
                    </li>
                    <li class={`splide__slide ${styles.slide}`}>
                        <div class={styles.projectCard}>
                            <img src="" alt="" />
                        </div>
                    </li>
                    <li class={`splide__slide ${styles.slide}`}>
                        <div class={styles.projectCard}>
                            <img src="" alt="" />
                        </div>
                    </li>
                    <li class={`splide__slide ${styles.slide}`}>
                        <div class={styles.projectCard}>
                            <img src="" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

// {
//     direction: 'ttb',
//     height: '100%',
//     arrows: false,
//     type: 'loop',
//     padding: '5px',
//     perPage: 1,
//     gap: '10px',
//     classes: {
//         pagination: `splide__pagination ${styles.splidePagination}`,
//     }
// }
