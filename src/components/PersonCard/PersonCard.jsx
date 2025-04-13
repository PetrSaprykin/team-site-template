import { FaSolidAngleRight } from 'solid-icons/fa'
import { Show } from 'solid-js'

import styles from './PersonCard.module.css'

export default function PersonCard(props) {
    return (
        <div
            classList={{
                [styles.card]: true,
                [styles.selectedCard]: props.isSelected,
            }}
            onClick={() => {
                props.onSelect(props.user)
                props.onSend(props.user)
            }}
        >
            <span class={styles.selectTag}>
                <FaSolidAngleRight size={25} />
            </span>
            <div class={styles.cardImg}>
                <Show
                    when={props.user?.image?.card}
                    fallback={<div class={styles.placeholder}>Фото</div>}
                >
                    <img
                        src={props.user.image.card}
                        alt={`Фото ${props.user.name}`}
                        loading="lazy"
                    />
                </Show>
            </div>
            <div class={styles.cardInfo}>
                <h4 class={styles.name}>
                    {`${props.user?.name.slice(0, 2).join(' ')}`}
                    &nbsp;
                    <span>{props.user.name[2]}</span>
                </h4>
                <span class={styles.role}>{props.user?.role}</span>
            </div>
        </div>
    )
}
