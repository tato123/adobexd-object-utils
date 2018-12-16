import * as NodeTypes from './node'
import { SceneNode } from './@types/scenegraph'
import { transformAsJson } from './util/xdWrapper'

/**
 * Takes a selection of items from AdobeXD and serializes to JSON
 *
 * @param selection
 */
function serialize(selection: Array<SceneNode>) {
  return selection.length === 0 ? [] : selection.map(transformAsJson)
}

module.exports = {
  serialize: serialize
}
