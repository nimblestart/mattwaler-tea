const rss = require('@11ty/eleventy-plugin-rss')
const highlighting = require('@11ty/eleventy-plugin-syntaxhighlight')
const format = require('date-fns/format')

module.exports = (config) => {
  config.addPassthroughCopy({ public: './' })

  config.addPlugin(rss)
  config.addPlugin(highlighting)

  config.addFilter('date', function(value) {
    return format(value, 'MMMM d, yyyy')
  })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match
        },
      },
    },
  })

  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: "njk",
  }
}
