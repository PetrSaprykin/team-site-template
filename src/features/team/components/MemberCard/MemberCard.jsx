import { FaSolidAngleRight } from 'solid-icons/fa'
import { Show } from 'solid-js'

import styles from './MemberCard.module.css'

export default function MemberCard(props) {
  return (
    <div
      classList={{
        [styles.card]: true,
        [styles.selectedCard]: props.isSelected,
      }}
      onClick={() => {
        props.onSelect(props.member)
      }}
    >
      <span class={styles.selectTag}>
        <FaSolidAngleRight size={25} />
      </span>
      <div class={styles.cardImg}>
        <Show when={props.member?.image} fallback={<div class={styles.placeholder}>Нет фото</div>}>
          <img src={props.member.image} alt={`Фото ${props.member.name[1]}`} loading="lazy" />
        </Show>
      </div>
      <div class={styles.cardInfo}>
        <h4 class={styles.name}>
          {`${props.member?.name.slice(0, 2).join(' ')}`}
          <span>{` ${props.member.name[2]}`}</span>
        </h4>
        <span class={styles.role}>{props.member?.role}</span>
      </div>
    </div>
  )
}
