'use strict'

const mongoose = require('mongoose')

module.exports = config => {
  const userPassword = config.mongoUser
    ? `${config.mongoUser}:${config.mongoPass}@`
    : ''
  mongoose
    .connect(
      `mongodb://${userPassword}${config.mongoHost}:${
        config.mongoPort
      }/multicast?authSource=${config.mongoAuthSource}`,
      { useNewUrlParser: true }
    )
    .catch(() => console.log('Could not connect to Mongo.'))
}
