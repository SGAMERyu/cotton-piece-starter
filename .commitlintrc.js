// commitlint.config.js | .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'revert',
        'perf',
        'build',
        'ci',
        'chore'
      ]
    ]
  },
  prompt: {
    useEmoji: true
  }
}
