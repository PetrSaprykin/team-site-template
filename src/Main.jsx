import { createSignal, For, onCleanup, onMount, Show } from 'solid-js'

import profiles from '../profiles.js'
import CardSlider from './components/CardSlider/CardSlider.jsx'
import InfoBlock from './components/InfoBlock/InfoBlock'
import PersonCard from './components/PersonCard/PersonCard'
import styles from './Main.module.css'

export default function Main() {
    const [sentData, setSentData] = createSignal(null)
    const [isMobile, setIsMobile] = createSignal(false)

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 0)
    }

    onMount(() => {
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        setSentData(profiles[0])
    })

    onCleanup(() => {
        window.removeEventListener('resize', checkScreenSize)
    })

    const handleSendData = (data) => {
        setSentData(data)
    }

    return (
        <section class={styles.mainSection}>
            <h1 class={styles.title}>Команда New Devs</h1>
            <div class={styles.mainBlock}>
                <Show
                    when={isMobile()}
                    fallback={
                        <div class={styles.cardColumn}>
                            <For each={profiles.slice(0, 5)}>
                                {(user) => <PersonCard user={user} onSend={handleSendData} />}
                            </For>
                        </div>
                    }
                >
                    <CardSlider>
                        <For each={profiles.slice(0, 5)}>
                            {(user) => <PersonCard user={user} onSend={handleSendData} />}
                        </For>
                    </CardSlider>
                </Show>
                <InfoBlock user={sentData()} />
            </div>
        </section>
    )
}
