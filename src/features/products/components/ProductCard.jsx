import { createEffect, createSignal, For, onMount } from 'solid-js'

import settings from '/settings.json' with { type: 'json' };  // Современный синтаксис
import Button from '../../../shared/components/Button/Button'
import styles from './ProductCard.module.css'

const members = settings.team.members;

export default function ProductCard(props) {
  const [product, setProduct] = createSignal(null)

  let cardRef

  createEffect(() => {
    setProduct(props.product)
  })

  // прокрутка страницы к карточке при наличии в url якоря
  // пример: www.new-devs.ru/#0 где 0 - id проекта
  onMount(() => {
    const hash = window.location.hash.slice(1) // Убираем #
    console.log(hash, product()?.id)
    if (hash && cardRef && hash === product()?.id?.toString()) {
      cardRef.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        cardRef.classList.add('flash-card')

        setTimeout(() => {
          cardRef.classList.remove('flash-card')
        }, 1500) // время одной анимаци * кол-во анимаций (500*3 = 1500) (ms)
      }, 750) //задержка между началом скролла и началом анимации
    }
  })

  const showMemberInfo = (member) => {
    window.scroll({ top: 0, behavior: 'smooth' })
    props.onMemberSelect(member)
  }

  return (
    <div class={`${styles.productCard} block`} card-name={product()?.name} ref={cardRef}>
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
