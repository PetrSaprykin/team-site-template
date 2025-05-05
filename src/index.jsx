/* @refresh reload */

import { render } from 'solid-js/web'
import settings from '/settings.json' with { type: 'json' }
import Main from './app/Main'

const root = document.getElementById('root')

document.title = settings?.team?.name

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('#main-section')

  // Получаем текущую высоту в пикселях (уже вычисленную из 100dvh)
  const fixedHeight = main.clientHeight

  // Заменяем 100dvh на фиксированное значение в px
  main.style.height = `${fixedHeight}px`
})

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  )
}

render(() => <Main />, root)
