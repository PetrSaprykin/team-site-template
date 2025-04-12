// InfoBlock.tsx
import {
    FaBrandsGithub,
    FaBrandsTelegram,
    FaSolidEnvelope,
    FaSolidGlobe,
    FaSolidSquarePhone,
} from 'solid-icons/fa'
import { RiArrowsArrowGoBackFill } from 'solid-icons/ri'

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
                <RiArrowsArrowGoBackFill class={styles.backButton} />
            </div>

            <div class={styles.contentSection}>
                <h2 class={styles.title}>{props?.user?.name.join(' ')}</h2>

                <div class={styles.contactsBlock}>
                    <div class={styles.contactItem}>
                        <FaSolidEnvelope class={styles.contactIcon} />
                        <span>:</span>
                        <a href={`mailto:${props?.user?.contacts.email}`}>
                            {props?.user?.contacts.email}
                        </a>
                    </div>
                    <div class={styles.contactItem}>
                        <FaSolidSquarePhone class={styles.contactIcon} />
                        <span>:</span>
                        <a href={`tel:${props?.user?.contacts?.phone}`}>
                            {props?.user?.contacts?.phone}
                        </a>
                    </div>
                    <div class={styles.contactItem}>
                        <FaSolidGlobe class={styles.contactIcon} />
                        <span>:</span>
                        <a href={props?.user?.contacts?.site}>{props?.user?.contacts?.site}</a>
                    </div>
                    <div class={styles.contactItem}>
                        <FaBrandsTelegram class={styles.contactIcon} />
                        <span>:</span>
                        <a href={`t.me/${props?.user?.contacts?.telegram}`}>
                            {props?.user?.contacts?.telegram}
                        </a>
                    </div>
                    <div class={styles.contactItem}>
                        <FaBrandsGithub class={styles.contactIcon} />
                        <span>:</span>
                        <a href={`github.com/${props?.user?.contacts?.gihub}`}>
                            {props?.user?.contacts?.github}
                        </a>
                    </div>
                </div>
                <div class={styles.textBlock}>
                    <p class={styles.contentText}>{props?.user?.about}</p>
                </div>
            </div>
        </div>
    )
}
