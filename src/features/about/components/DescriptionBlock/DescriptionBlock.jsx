import styles from './DescriptionBlock.module.css'

export default function DescriptionBlock(props) {
    return (
        <div class={`${styles.textBlock} block`}>
            <p class={styles.contentText}>{props.content}</p>
        </div>
    )
}
