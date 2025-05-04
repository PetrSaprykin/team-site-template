import {
  FaBrandsGithub,
  FaBrandsTelegram,
  FaSolidEnvelope,
  FaSolidSquarePhone,
} from 'solid-icons/fa'

import styles from './ContactsBlock.module.css'

export default function ContactsBlock(props) {
  return (
    <ul class={`${styles.contactsBlock} block`}>
      <div class={styles.contactsRow}>
      <Show when={props?.member?.contacts?.email !== null}>
        <li class={styles.contactItem}>
          <FaSolidEnvelope class={styles.contactIcon} />
          <span>:</span>
          <a href={`mailto:${props?.member?.contacts.email}`} target="blank">
            {props?.member?.contacts.email}
          </a>
        </li>
        </Show>
        <Show when={props?.member?.contacts?.phone !== null}>
        <li class={styles.contactItem}>
          <FaSolidSquarePhone class={styles.contactIcon} />
          <span>:</span>
          <a href={`tel:${props?.member?.contacts?.phone}`} target="blank">
            {props?.member?.contacts?.phone}
          </a>
        </li>
        </Show>
      </div>
      <div class={styles.contactsRow}>
        <Show when={props?.member?.contacts?.telegram !== null}>
          <li class={styles.contactItem}>
            <FaBrandsTelegram class={styles.contactIcon} />
            <span>:</span>
            <a href={`https://t.me/${props?.member?.contacts?.telegram}`} target="blank">
              @{props?.member?.contacts?.telegram}
            </a>
          </li>
        </Show>
        <Show when={props?.member?.contacts?.github !== null}>
        <li class={styles.contactItem}>
          <FaBrandsGithub class={styles.contactIcon} />
          <span>:</span>
          <a href={`https://github.com/${props?.member?.contacts?.github}`} target="blank">
            {props?.member?.contacts?.github}
          </a>
        </li>
        </Show>
      </div>
    </ul>
  )
}
