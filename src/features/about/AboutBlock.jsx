// InfoBlock.tsx
import '../../shared/styles/global.css'

import { createMediaQuery } from '@solid-primitives/media'
import { FaSolidHouseUser } from 'solid-icons/fa'
import { Show } from 'solid-js'

import CardSlider from '../../shared/components/CardSlider/CardSlider'
import styles from './AboutBlock.module.css'
// import HomeButton from '../../shared/components/Button/Button'
import ContactsBlock from './components/ContactsBlock/ContactsBlock'
import DescriptionBlock from './components/DescriptionBlock/DescriptionBlock'
import SkillsBlock from './components/SkillsBlock/SkillsBlock'

export default function AboutBlock(props) {
  console.log(props)
  const hasWebSite = () => props?.member?.contacts?.site

  const isTablet = createMediaQuery('(max-width: 960px) and (min-width: 570px')
  const isMobile = createMediaQuery('(max-width: 570px')
  const slidesCount = () => Object.keys(props?.member?.projects).length

  return (
    <>
      <div class={`${styles.container} block`}>
        <div class={styles.sections}>
          <div class={styles.leftSection}>
            <div class={`${styles.photoPlaceholder} block`}>
              <img src={props?.member?.image?.profile} />
            </div>

            <Show when={!isMobile()}>
              <SkillsBlock member={props.member} />
            </Show>
            <Show when={isTablet() && props?.member}>
              <div class={`${styles.verticalSliderBlock} block`}>
                <CardSlider
                  projects={props?.member?.projects}
                  slides={slidesCount()}
                  options={{
                    direction: 'ttb',
                    perPage: 1,
                    drag: true,
                    pagination: slidesCount() <= 5 ? true : false,
                    autoplay: slidesCount() > 1 ? true : false,
                    interval: 2500,
                  }}
                />
              </div>
            </Show>
          </div>
          <div class={styles.rightSection}>
            <h2 class={`${styles.title} ${!hasWebSite() ? styles.single : ' '}`}>
              {props?.member?.name.join(' ')}
            </h2>

            <Show when={!isMobile()}>
              <ContactsBlock member={props?.member} />
            </Show>

            <Show when={hasWebSite()}>
              <p class={`${styles.siteLinkRow} block`}>
                Веб-сайт{' '}
                <a href={`https://${props?.member?.contacts?.site}`} target="blank">
                  {props?.member?.contacts?.site}
                </a>
              </p>
            </Show>

            <Show when={!isMobile()}>
              <DescriptionBlock content={props?.member?.about} />
            </Show>
          </div>
        </div>
        <Show when={isMobile()}>
          <ContactsBlock member={props?.member} />
          <SkillsBlock member={props.member} />
          <DescriptionBlock content={props?.member?.about} />
        </Show>
        <Show when={!isTablet()}>
          <div class={styles.horizontalSliderBlock}>
            <CardSlider
              projects={props?.member?.projects}
              slides={slidesCount()}
              type="horizontal"
              isMobile={isMobile()}
              options={{
                gap: '15px',
                autoScroll: {
                  speed: 0.75,
                },
                wheel: true,
              }}
            />
          </div>
        </Show>
      </div>
      <button class={styles.homeButton} onClick={() => props.onButtonClick()}>
        <FaSolidHouseUser size={35} />
      </button>
    </>
  )
}
