const md = require('markdown-it')
const mdContainer = require('markdown-it-container')

const markdown = md()
  .use(mdContainer, 'codeblock', {
    render: function (tokens, idx) {
      if (tokens[idx].type === 'container_codeblock_open') {
        return /*html*/`
          <div class="bg-gray-900 p-4 text-white rounded-lg shadow-lg">
            <div class="space-x-2 flex items-center">
              <div class="rounded-full w-3 h-3 bg-red-500"></div>
              <div class="rounded-full w-3 h-3 bg-yellow-500"></div>
              <div class="rounded-full w-3 h-3 bg-green-500"></div>
            </div>
        `
      } return /*html*/`</div>`
    }
  })
  .use(mdContainer, 'tldr', {
    render: function (tokens, idx) {
      if (tokens[idx].type === 'container_tldr_open') {
        return /*html*/`
        <div class="border-l-2 border-indigo-500 pl-4 mb-16">
          <span class="text-2xl font-extrabold">Too Long, Didn't Read</span>
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
