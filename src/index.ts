import * as NodeTypes from './node'
import { SceneNode } from './@types/scenegraph'
import deepMap from 'deep-map'

interface AllocObject {
  constructor: {
    name: string
  }
}

interface XdWrapper extends NodeTypes.JsonSerializer {
  new (any): XdWrapper
}

function getXDWrapper(node: AllocObject): XdWrapper | undefined {
  const wrapperName: XdWrapper = NodeTypes[node.constructor.name]
  if (wrapperName !== undefined) {
    return new wrapperName(node)
  }

  return undefined
}

function iterator(sceneNode: SceneNode): Array<NodeTypes.SerializedNode> {
  return sceneNode.children.map(node => {
    const wrapper = getXDWrapper(node)
    return {
      ...wrapper,
      children: node.children.map(iterator)
    }
  })
}

/**
 * Takes a selection of items from AdobeXD and serializes to JSON
 *
 * @param selection
 */
function serialize(selection: Array<SceneNode>) {
  return selection.length === 0 ? [] : selection.map(iterator)
}

module.exports = {
  serialize: serialize
}
