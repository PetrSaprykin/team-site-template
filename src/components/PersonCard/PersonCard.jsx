import styles from './PersonCard.module.css'

export default function PersonCard(props) {
  return (
    <>
      <div class={styles.card} onClick={() => props.onSend(props.user)}>
        <div class={styles.cardImg}>
          <img src={props?.user?.image?.card} />
        </div>
        <div class={styles.cardInfo}>
          <h4 class={styles.name}>{props?.user?.name}</h4>
          <div class={styles.textBlock}>
            <p>
              <a>{props?.user?.contacts?.email}</a>
            </p>
            <p>{props?.user?.role}</p>
          </div>
        </div>
      </div>
    </>
  )
}
