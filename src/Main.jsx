import { createSignal, For, onMount } from 'solid-js'

import profiles from '../profiles.js'
import InfoBlock from './components/InfoBlock/InfoBlock'
import PersonCard from './components/PersonCard/PersonCard'
import styles from './Main.module.css'

export default function Main() {
    const [selectedUserId, setSelectedUserId] = createSignal(-1)
    const [sentData, setSentData] = createSignal(null)

    const handleSelect = (user) => {
        setSelectedUserId(user.id)
    }
    const handleSendData = (data) => {
        setSentData(data)
    }

    onMount(() => {
        setSentData(profiles[0])
    })

    return (
        <section class={styles.mainSection}>
            <h1 class={styles.title}>Команда New Devs</h1>
            <div class={styles.mainBlock}>
                <div class={styles.cardColumn}>
                    <For each={profiles.slice(0, 5)}>
                        {(user) => (
                            <PersonCard
                                user={user}
                                onSend={handleSendData}
                                isSelected={selectedUserId() === user.id}
                                onSelect={handleSelect}
                            />
                        )}
                    </For>
                </div>
                <InfoBlock user={sentData()} />
            </div>
        </section>
    )
}
