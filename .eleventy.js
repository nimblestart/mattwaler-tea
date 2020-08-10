const rss = require('@11ty/eleventy-plugin-rss')
const highlighting = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = (config) => {
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
