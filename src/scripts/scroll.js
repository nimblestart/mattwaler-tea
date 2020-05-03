import { on, run, qs } from './helpers'

run('[data-scroll]', el => {
  const id = el.getAttribute('data-scroll')
  const target = qs(`#${id}`)
  on('click', el, () => {
    target.scrollIntoView({
      behavior: 'smooth',
    })
  })
})
