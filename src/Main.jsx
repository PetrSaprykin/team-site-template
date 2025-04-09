import { For } from 'solid-js'
import { createSignal } from 'solid-js'

import profiles from '../profiles.js'
import InfoBlock from './components/InfoBlock/InfoBlock'
import PersonCard from './components/PersonCard/PersonCard'
import styles from './Main.module.css'

export default function Main() {
  const [sentData, setSentData] = createSignal(null)

  // Функция для обработки данных
  const handleSendData = (data) => {
    setSentData(data)
  }
  return (
    <>
      <section class={styles.mainSection}>
        <h1 class={styles.title}>Команда New Devs</h1>
        <div class={styles.mainBlock}>
          <div class={styles.cardColumn}>
            <For each={profiles.slice(0, 5)}>{(user) => <PersonCard user={user} onSend={handleSendData} />}</For>
          </div>
          <InfoBlock user={sentData()} />
        </div>
      </section>
    </>
  )
}
