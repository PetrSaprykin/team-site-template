// InfoBlock.tsx

import styles from './InfoBlock.module.css'

export default function InfoBlock(props) {
  return (
    <div class={styles.container}>
      <div class={styles.photoSection}>
        <div class={styles.photoPlaceholder}>
          <img src={props?.user?.image?.profile} />
        </div>
        <div class={styles.stackBlock}>
          <p>{props?.user?.stack}</p>
        </div>
      </div>

      <div class={styles.contentSection}>
        {/* Заголовок */}
        <h1 class={styles.title}>{props?.user?.name}</h1>

        <div class={styles.contactsBlock}>
          <div class={styles.contactItem}>
            <p>
              Email:{' '}
              <a href={`mailto:${props?.user?.contacts.email}`}>{props?.user?.contacts.email}</a>
            </p>
          </div>
          <div class={styles.contactItem}>
            <p>
              Тел:
              <a href={`tel:${props?.user?.contacts?.phone}`}>{props?.user?.contacts?.phone}</a>
            </p>
          </div>
          <div class={styles.contactItem}>
            <p>
              Сайт: <a href={props?.user?.contacts?.site}>{props?.user?.contacts?.site}</a>
            </p>
          </div>
          <div class={styles.contactItem}>
            <p>
              Тg:
              <a href={`t.me/${props?.user?.contacts?.telegram}`}>
                {props?.user?.contacts?.telegram}
              </a>
            </p>
          </div>
          <div class={styles.contactItem}>
            <p>
              Git:{' '}
              <a href={`github.com/${props?.user?.contacts?.gihub}`}>
                {props?.user?.contacts?.github}
              </a>
            </p>
          </div>
        </div>

        {/* Текстовый блок (серый фон) */}
        <div class={styles.textBlock}>
          <p class={styles.contentText}>{props?.user?.about}</p>
        </div>
      </div>
    </div>
  )
}
