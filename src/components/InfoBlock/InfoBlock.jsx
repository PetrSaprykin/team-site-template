// InfoBlock.tsx
import { createMediaQuery } from '@solid-primitives/media'
import {
    FaBrandsGithub,
    FaBrandsTelegram,
    FaSolidEnvelope,
    FaSolidHouseUser,
    FaSolidSquarePhone,
} from 'solid-icons/fa'
import { For, Show } from 'solid-js'

import CardSlider from '../CardSlider/CardSlider'
import styles from './InfoBlock.module.css'

export default function InfoBlock(props) {
    const isTablet = createMediaQuery('(max-width: 960px) and (min-width: 570px')
    const isMobile = createMediaQuery('(max-width: 570px')

    return (
        <>
            <div class={styles.container}>
                <div class={styles.sections}>
                    <div class={styles.photoSection}>
                        <div class={`${styles.photoPlaceholder} ${styles.block}`}>
                            <img src={props?.user?.image?.profile} />
                        </div>
                        <Show when={!isMobile()}>
                            <div class={`${styles.skillsBlock} ${styles.block}`}>
                                <ul class={styles.skillsList}>
                                    <For each={props?.user?.skills.split(',')}>
                                        {(item) => <li>{item.trim()}</li>}
                                    </For>
                                </ul>
                            </div>
                        </Show>

                        <Show when={isTablet() && props?.user}>
                            <div class={`${styles.sliderBlock} ${styles.block}`}>
                                <CardSlider
                                    projects={props.user.projects}
                                    options={{
                                        direction: 'ttb',
                                        perPage: 1,
                                        pagination:
                                            Object.keys(props.user.projects).length <= 5
                                                ? true
                                                : false,
                                        autoplay:
                                            Object.keys(props.user.projects).length > 1
                                                ? true
                                                : false,
                                        interval: 10000500,
                                    }}
                                />
                            </div>
                        </Show>
                    </div>
                    <div class={styles.contentSection}>
                        <h2 class={styles.title}>{props?.user?.name.join(' ')}</h2>
                        <Show when={!isMobile()}>
                            <ul class={`${styles.linksBlock} ${styles.block}`}>
                                <div class={styles.linksRow}>
                                    <li class={styles.linkItem}>
                                        <FaSolidEnvelope class={styles.contactIcon} />
                                        <span>:</span>
                                        <a href={`mailto:${props?.user?.contacts.email}`}>
                                            {props?.user?.contacts.email}
                                        </a>
                                    </li>
                                    <li class={styles.linkItem}>
                                        <FaSolidSquarePhone class={styles.contactIcon} />
                                        <span>:</span>
                                        <a href={`tel:${props?.user?.contacts?.phone}`}>
                                            {props?.user?.contacts?.phone}
                                        </a>
                                    </li>
                                </div>
                                <div class={styles.linksRow}>
                                    <li class={styles.linkItem}>
                                        <FaBrandsTelegram class={styles.contactIcon} />
                                        <span>:</span>
                                        <a href={`t.me/${props?.user?.contacts?.telegram}`}>
                                            {props?.user?.contacts?.telegram}
                                        </a>
                                    </li>
                                    <li class={styles.linkItem}>
                                        <FaBrandsGithub class={styles.contactIcon} />
                                        <span>:</span>
                                        <a href={`github.com/${props?.user?.contacts?.gihub}`}>
                                            {props?.user?.contacts?.github}
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </Show>

                        <p class={`${styles.siteLinkRow} ${styles.block}`}>
                            Веб-сайт{' '}
                            <a href={props?.user?.contacts?.site}>{props?.user?.contacts?.site}</a>
                        </p>
                        <Show when={!isMobile()}>
                            <div class={`${styles.textBlock} ${styles.block}`}>
                                <p class={styles.contentText}>{props?.user?.about}</p>
                            </div>
                        </Show>
                    </div>
                </div>
                <Show when={isMobile()}>
                    <ul class={`${styles.linksBlock} ${styles.block}`}>
                        <div class={styles.linksRow}>
                            <li class={styles.linkItem}>
                                <FaSolidEnvelope class={styles.contactIcon} />
                                <span>:</span>
                                <a href={`mailto:${props?.user?.contacts.email}`}>
                                    {props?.user?.contacts.email}
                                </a>
                            </li>
                            <li class={styles.linkItem}>
                                <FaSolidSquarePhone class={styles.contactIcon} />
                                <span>:</span>
                                <a href={`tel:${props?.user?.contacts?.phone}`}>
                                    {props?.user?.contacts?.phone}
                                </a>
                            </li>
                        </div>
                        <div class={styles.linksRow}>
                            <li class={styles.linkItem}>
                                <FaBrandsTelegram class={styles.contactIcon} />
                                <span>:</span>
                                <a href={`t.me/${props?.user?.contacts?.telegram}`}>
                                    {props?.user?.contacts?.telegram}
                                </a>
                            </li>
                            <li class={styles.linkItem}>
                                <FaBrandsGithub class={styles.contactIcon} />
                                <span>:</span>
                                <a href={`github.com/${props?.user?.contacts?.gihub}`}>
                                    {props?.user?.contacts?.github}
                                </a>
                            </li>
                        </div>
                    </ul>
                    <div class={`${styles.skillsBlock} ${styles.block}`}>
                        <ul class={styles.skillsList}>
                            <For each={props?.user?.skills.split(',')}>
                                {(item) => <li>{item.trim()}</li>}
                            </For>
                        </ul>
                    </div>
                    <div class={`${styles.textBlock} ${styles.block}`}>
                        <p class={styles.contentText}>{props?.user?.about}</p>
                    </div>
                </Show>
                <Show when={!isTablet() && props?.user}>
                    <div class={styles.horizontalSliderBlock}>
                        <CardSlider
                            projects={props.user?.projects}
                            options={{
                                gap: '15px',
                                wheel: true,
                                speed: 3000,
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
