const path = require('path')

module.exports = {
  'plugins': {
    'postcss-import': {
      resolve(id) {
        return id.startsWith('@') ? id.replace('@', path.resolve(__dirname, 'src')) : id
      },
    },
    'postcss-cssnext': true,
  },
}
