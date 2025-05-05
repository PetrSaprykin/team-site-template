/* @refresh reload */

import { render } from 'solid-js/web'
import settings from '/settings.json' with { type: 'json' }
import Main from './app/Main'

const root = document.getElementById('root')

document.title = settings?.team?.name

// фикс для корректного отображения
// учитывается высота адресной строки с помощью dvh в css и фикисируется высота контейнера
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 570) {
    const main = document.querySelector('#main-section')

    const fixedHeight = main.clientHeight

    main.style.height = `${fixedHeight}px`
  }
})

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  )
}

render(() => <Main />, root)
