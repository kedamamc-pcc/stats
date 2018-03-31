const express = require('express')

module.exports = {
  devServer: {
    before: app => {
      app.use('/stats-data', express.static(__dirname + '/mock'))
    },
  },
}
