import { run, qsa } from './helpers'

run('body', () => {
  const divs = qsa('div')
  divs.forEach(div => div.setAttribute('role', 'presentation'))
})
