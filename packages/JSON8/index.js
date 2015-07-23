'use strict'

var is = require('./lib/is')
var types = require('./lib/types')

module.exports.clone = require('./lib/clone')
module.exports.equal = require('./lib/equal')
module.exports.every = require('./lib/every')
module.exports.forEach = require('./lib/forEach')
module.exports.forOf = require('./lib/forOf')
module.exports.map = require('./lib/map')
module.exports.is = is
for (var k in is) {
  if (k.indexOf('is') === 0)
  module.exports[k] = is[k]
}
module.exports.parse = require('./lib/parse')
module.exports.serialize = require('./lib/serialize')
module.exports.size = require('./lib/size')
module.exports.some = require('./lib/some')
module.exports.type = require('./lib/type')
for (var type in types)
  module.exports[type] = types[type]
module.exports.valid = require('./lib/valid')
