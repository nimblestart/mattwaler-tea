const highlighting = require('@11ty/eleventy-plugin-syntaxhighlight')
const rss = require('@11ty/eleventy-plugin-rss')
const prettyDate = require('./src/_includes/filters/prettyDate')

module.exports = (config) => {
  config.addFilter('prettyDate', prettyDate)
  config.addPassthroughCopy({ public: './' })
  config.addPlugin(rss)
  config.addPlugin(highlighting)
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
