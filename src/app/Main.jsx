import './../shared/styles/global.css'

import { createMediaQuery } from '@solid-primitives/media'
import { createSignal, Show } from 'solid-js'

import introText from '../../introducing'
import members from '../../members'
import AboutBlock from '../features/about/AboutBlock'
import TeamList from '../features/team/TeamList.jsx'
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

  const backButtonClick = () => {
    setSelectedUserId(null)
    setInfoBlockOpen(false)
  }

  return (
    <section class={styles.mainSection}>
      <h1 class={styles.title}>Команда New Devs</h1>
      <div class={styles.mainBlock}>
        <Show when={!isMobileLayout() || !infoBlockOpen()}>
          <TeamList team={members} onSelect={handleSelect} selectedUserId={selectedUserId()} />
        </Show>

        <Show
          when={selectedUserId() != null && infoBlockOpen()}
          fallback={<h3 class={styles.helloBlock}>{introText}</h3>}
        >
          <AboutBlock member={sentData()} onButtonClick={backButtonClick} />
        </Show>
      </div>
    </section>
  )
}
