import './../shared/styles/global.css'

import { createMediaQuery } from '@solid-primitives/media'
import { createSignal, Show, onMount, createEffect } from 'solid-js'

import settings from '/settings.json' with { type: 'json' }

import AboutBlock from '../features/about/AboutBlock'
import ProductsGrid from '../features/products/ProductsGrid'
import TeamList from '../features/team/TeamList'
import styles from './Main.module.css'

document.addEventListener('DOMContentLoaded', () => {})

export default function Main() {
  const members = settings?.team?.members

  const isMobileLayout = createMediaQuery('(max-width: 825px)')

  const [selectedMember, setSelectedMember] = createSignal(null)

  let mainSection, mainBlock

  const handleSelect = (member) => {
    setSelectedMember(member)
    ;(mainBlock, mainSection).classList.add(styles.mobileOpened)
  }

  const backButtonClick = () => {
    setSelectedMember(null)
    mainBlock.classList.remove(styles.mobileOpened)
  }

  return (
    <>
      <section class={styles.mainSection} ref={mainSection}>
        <h1 class={styles.mainSectionTitle}>{`Команда ${settings.team.name}`}</h1>
        <div class={styles.mainBlock} ref={mainBlock}>
          <Show when={!isMobileLayout() || !selectedMember()}>
            <TeamList
              team={members}
              onSelect={handleSelect}
              selectedUserId={selectedMember()?.id}
            />
          </Show>

          <Show
            when={selectedMember()}
            fallback={<h3 class={styles.helloBlock}>{settings.team.introduction}</h3>}
          >
            <AboutBlock member={selectedMember()} onButtonClick={backButtonClick} />
          </Show>
        </div>
      </section>
      <section class={styles.productsSection}>
        <h2 class={styles.productSectionTitle}>Проекты при нашем участии</h2>
        <ProductsGrid onMemberSelect={handleSelect} />
      </section>
      <footer class="block">
        <h4>
          &copy; {window.location.hostname} {new Date().getFullYear()}
        </h4>
      </footer>
    </>
  )
}
