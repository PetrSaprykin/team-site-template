import { createEffect, createSignal, For } from 'solid-js'

import members from '../../../../members'
import styles from './ProductCard.module.css'

export default function ProductCard(props) {
  const [product, setProduct] = createSignal(null)

  createEffect(() => {
    setProduct(props.product)
    console.log(props.product)
  })

  return (
    <div class={`${styles.productCard} block`}>
      <div class={styles.header}>
        <div class={styles.logo}>
          <img src="https://pink-darb-33.tiiny.site/logotype.svg" alt="" />
        </div>
        <div class={styles.projectInfo}>
          <h3 class={styles.projectTitle}>{product()?.name}</h3>
          <p class={styles.projectTech}>{product()?.stack.join(' · ')}</p>
        </div>
      </div>

      <p class={styles.description}>{product()?.about}</p>
      <h6 class={styles.teamTitle}>Участники:</h6>
      <div class={styles.team}>
        <For each={product()?.membersId}>
          {(id) => {
            const member = members.find((item) => item.id === id)
            const memberRole = member.projects[product()?.name]
            return (
              <div class={styles.member}>
                <div class={styles.avatar}>
                  <img src="https://i.postimg.cc/rpD3hG6D/petr-card-pic.png" alt="" />
                </div>
                <div class={styles.memberInfo}>
                  <span class={styles.memberName}>
                    {member?.name[0]} {member?.name[1].slice(0, 1)}.
                  </span>
                  <span class={styles.memberRole}>{memberRole}</span>
                </div>
              </div>
            )
          }}
        </For>
      </div>
      <a href={product()?.link} class={styles.button} target="blank">
        Смотреть на GitHub
      </a>
    </div>
  )
}
