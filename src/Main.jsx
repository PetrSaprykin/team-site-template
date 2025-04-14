import { createMediaQuery } from '@solid-primitives/media'
import { createSignal, For, onMount, Show } from 'solid-js'

import profiles from '../profiles.js'
import InfoBlock from './components/InfoBlock/InfoBlock'
import PersonCard from './components/PersonCard/PersonCard'
import styles from './Main.module.css'

export default function Main() {
    const isMobileLayout = createMediaQuery('(max-width: 825px')

    const [selectedUserId, setSelectedUserId] = createSignal(null)
    const [infoBlockOpen, setInfoBlockOpen] = createSignal(false)
    const [sentData, setSentData] = createSignal(null)

    const handleSelect = (user) => {
        setInfoBlockOpen(true)
        setSelectedUserId(user.id)
        setSentData(user)
    }
    const handleSendData = (data) => {
        setSentData(data)
    }

    const backButtonClick = () => {
        setSelectedUserId(null)
        setInfoBlockOpen(false)
    }

    onMount(() => {
        setSentData(profiles[0])
    })

    // по кнопке домой просто устанавлиаем selectedUserId в null
    return (
        <section class={styles.mainSection}>
            <h1 class={styles.title}>Команда New Devs</h1>
            <div class={styles.mainBlock}>
                <Show when={!isMobileLayout() || !infoBlockOpen()}>
                    <div class={styles.cardColumn}>
                        <For each={profiles.slice(0, 5)}>
                            {(user) => (
                                <PersonCard
                                    user={user}
                                    onSelect={(handleSendData, handleSelect)}
                                    isSelected={selectedUserId() === user.id}
                                />
                            )}
                        </For>
                    </div>
                </Show>
                <Show
                    when={selectedUserId() != null && infoBlockOpen()}
                    fallback={<h3 class={styles.helloBlock}>{profiles[1].about}</h3>}
                >
                    <InfoBlock user={sentData()} onButtonClick={backButtonClick} />
                </Show>
            </div>
        </section>
    )
}
