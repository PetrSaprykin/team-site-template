import 'solid-slider/slider.css'

import { VsTriangleLeft, VsTriangleRight } from 'solid-icons/vs'
import { Slider, SliderButton, SliderProvider } from 'solid-slider'
import { adaptiveWidth } from 'solid-slider/plugins/adaptiveWidth'

import styles from './CardSlider.module.css'

export default function CardSlider(props) {
    return (
        <div class={styles.sliderContainer}>
            <SliderProvider>
                <SliderButton prev class={styles.button}>
                    <VsTriangleLeft size={30} />
                </SliderButton>
                <Slider
                    options={{
                        loop: true,
                        slides: { spacing: 5 },
                        dragSpeed: 1,
                    }}
                    plugins={[adaptiveWidth]}
                >
                    {props.children}
                </Slider>
                <SliderButton next class={styles.button}>
                    <VsTriangleRight size={30} />
                </SliderButton>
            </SliderProvider>
        </div>
    )
}
