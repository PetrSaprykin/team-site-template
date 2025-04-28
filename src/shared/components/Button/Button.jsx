import styles from './Button.module.css'

export default function Button(props) {
  return (
    <button class={`${styles.button} ${props.class || ''}`} onClick={() => props.onClick()}>
      {props.children}
    </button>
  )
}
