import { run } from './helpers'
import Contact from './contact.svelte'

run('[data-contact]', target => new Contact({ target }))
