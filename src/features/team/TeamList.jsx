import { For } from 'solid-js'

import team from '../../../members'
import MemberCard from './components/MemberCard/MemberCard'
import styles from './TeamList.module.css'

export default function (props) {
  return (
    <div class={styles.cardList}>
      <For each={team.slice(0, 5)}>
        {(member) => (
          <MemberCard
            member={member}
            onSelect={props.onSelect}
            isSelected={props.selectedUserId === member.id}
          />
        )}
      </For>
    </div>
  )
}
