'use strict'

const mongoose = require('mongoose')

module.exports = config => {
  const userPassword = config.mongoUser
    ? `${config.mongoUser}:${config.mongoPass}@`
    : ''
  const cs = `mongodb://${userPassword}${config.mongoHost}:${config.mongoPort}/Chromecasts?replicaSet=AviusReplicaSet&connectTimeoutMS=10000&w=majority&j=true&authSource=${config.mongoAuthSource}`
  mongoose
    .connect(cs, { useNewUrlParser: true })
    .catch(e => console.log('Could not connect to Mongo.', e, cs))
}
