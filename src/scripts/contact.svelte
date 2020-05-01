<script>
  import { wait } from './helpers'
  import { fade } from 'svelte/transition'

  let didContact = false

  wait(250, () => {
    didContact = new URLSearchParams(window.location.search).has('contact')
  })

  wait(5000, () => didContact = false)

</script>


{#if didContact}
  <article
    class="absolute max-w-480 top-0 right-0 bg-white rounded shadow p-24 m-24 flex items-center"
    transition:fade
    role="alert"
    aria-label="Contact Form Alert">
    <svg
      class="flex-none w-48 h-48 p-8 rounded-full bg-green-200 text-green-600"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>
    </svg>
    <p class="text-14 ml-24">
      Thank you so much for reaching out! I will respond to your message as soon as possible.
    </p>
  </article>
{/if}
