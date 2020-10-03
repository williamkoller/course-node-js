const mongoose = require('mongoose')
const env = require('@/config/env')

mongoose.connect(env.mongoUrl, {
  useNewUrlParser: true,
})

module.exports = mongoose