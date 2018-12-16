const { serialize } = require('./adobexd-serializer')

async function serializeObject(selection) {
  const json = serialize(selection.items)
  console.log(JSON.stringify(json))
}

module.exports = {
  commands: {
    serializeObject: serializeObject
  }
}
