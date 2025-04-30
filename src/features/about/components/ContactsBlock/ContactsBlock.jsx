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
        <li class={styles.contactItem}>
          <FaSolidEnvelope class={styles.contactIcon} />
          <span>:</span>
          <a href={`mailto:${props?.member?.contacts.email}`} target="blank">
            {props?.member?.contacts.email}
          </a>
        </li>
        <li class={styles.contactItem}>
          <FaSolidSquarePhone class={styles.contactIcon} />
          <span>:</span>
          <a href={`tel:${props?.member?.contacts?.phone}`} target="blank">
            {props?.member?.contacts?.phone}
          </a>
        </li>
      </div>
      <div class={styles.contactsRow}>
        <li class={styles.contactItem}>
          <FaBrandsTelegram class={styles.contactIcon} />
          <span>:</span>
          <a href={`https://t.me/${props?.member?.contacts?.telegram}`} target="blank">
            @{props?.member?.contacts?.telegram}
          </a>
        </li>
        <li class={styles.contactItem}>
          <FaBrandsGithub class={styles.contactIcon} />
          <span>:</span>
          <a href={`https://github.com/${props?.member?.contacts?.github}`} target="blank">
            {props?.member?.contacts?.github}
          </a>
        </li>
      </div>
    </ul>
  )
}
