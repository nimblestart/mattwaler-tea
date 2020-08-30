const md = require('markdown-it')
const mdContainer = require('markdown-it-container')

const markdown = md()
  .use(mdContainer, 'codeblock', {
    render: function (tokens, idx) {
      if (tokens[idx].type === 'container_codeblock_open') {
        return /*html*/`
          <div class="bg-gray-900 p-2 text-white rounded-lg shadow-lg text-sm sm:text-base">
            <div class="px-4 pt-2 space-x-2 flex items-center">
              <div class="rounded-full w-3 h-3 bg-red-500"></div>
              <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
              <div class="rounded-full w-3 h-3 bg-green-500"></div>
            </div>
            <div class="mt-2">
        `
      } return /*html*/`</div></div>`
    }
  })
  .use(mdContainer, 'image', {
    render: function (tokens, idx) {
      if (tokens[idx].type === 'container_image_open') {
        return /*html*/`<div class="overflow-hidden shadow-lg rounded-lg">`
      } return /*html*/`</div>`
    }
  })

module.exports = markdown
