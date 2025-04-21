import { For } from 'solid-js'

import styles from './SkillsBlock.module.css'

export default function SkillsBlock(props) {
  return (
    <div class={`${styles.skillsBlock} block`}>
      <ul class={styles.skillsList}>
        <For each={props?.member?.skills.split(',')}>{(item) => <li>{item.trim()}</li>}</For>
      </ul>
    </div>
  )
}
