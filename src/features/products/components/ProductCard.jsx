import { createEffect, createSignal, For } from 'solid-js'

import members from '../../../../members'
import Button from '../../../shared/components/Button/Button'
import styles from './ProductCard.module.css'

export default function ProductCard(props) {
  const [product, setProduct] = createSignal(null)

  createEffect(() => {
    setProduct(props.product)
  })

  const showMemberInfo = (member) => {
    window.scroll({ top: 0, behavior: 'smooth' })
    props.onMemberSelect(member)
  }

  return (
    <div class={`${styles.productCard} block`} card-name={product()?.name}>
      <div class={styles.header}>
        <div class={styles.logo}>
          <img src={product()?.icon} alt={product()?.name} />
        </div>
        <div class={styles.productInfo}>
          <h3 class={styles.productTitle}>{product()?.name}</h3>
          <p class={styles.productTech}>{product()?.stack.join(' · ')}</p>
        </div>
      </div>

      <p class={styles.description}>{product()?.about}</p>
      <h6 class={styles.teamTitle}>Участники:</h6>
      <div class={styles.team}>
        <For each={Object.entries(product()?.members || {})}>
          {([id, role]) => {
            const member = members.find((memb) => memb.id === Number(id))
            return (
              <div class={styles.member} member-id={id} onClick={() => showMemberInfo(member)}>
                <div class={styles.avatar}>
                  <img src={member?.image} alt={member?.name[0]} />
                </div>
                <div class={styles.memberInfo}>
                  <span class={styles.memberName}>
                    {member?.name[0]} {member?.name[1].slice(0, 1)}.
                  </span>
                  <span class={styles.memberRole}>{role}</span>
                </div>
              </div>
            )
          }}
        </For>
      </div>

      <Button
        href={product()?.link}
        class={styles.button}
        onClick={() => window.open(product()?.link, '_blank')}
      >
        {() => {
          const link = product()?.link

          const isGithub = () => {
            try {
              if (!link) return false
              const parsedUrl = new URL(link)
              return (
                parsedUrl.hostname === 'github.com' || parsedUrl.hostname.endsWith('.github.com')
              )
            } catch {
              return false
            }
          }

          return isGithub() ? 'Смотреть на GitHub' : 'Перейти к проекту'
        }}
      </Button>
    </div>
  )
}
