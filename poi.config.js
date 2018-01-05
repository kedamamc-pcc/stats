module.exports = {
  html: {
    title: '「非官方」毛线玩家数据榜单',
  },
  devServer: {
    before(app) {
      app.get('/stats-data/ranks/latest.json', (req, res) => {
        res.json(require('./mock/ranks.json'))
      })
    },
  },
}