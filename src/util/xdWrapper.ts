import { SceneNodeList } from '../@types/index'
import * as NodeTypes from '../node'

export interface AllocObject {
  constructor: {
    name: string
  }
  children: SceneNodeList
}

export interface XdWrapper extends NodeTypes.JsonSerializer {
  new (any): XdWrapper
}

function deepMapChildren(sceneNodeList: SceneNodeList): Array<NodeTypes.SerializedNode> {
  return sceneNodeList.map(transformAsJson)
}

export function transformAsJson(node: AllocObject): NodeTypes.SerializedNode | undefined {
  const wrapperName: XdWrapper = NodeTypes[node.constructor.name]
  if (wrapperName !== undefined) {
    const wrapper = new wrapperName(node)
    const jsonRepresentation = wrapper.toJSON()
    if (!!node.children) {
      return Object.assign({}, jsonRepresentation, {
        children: deepMapChildren(node.children)
      })
    }
    return jsonRepresentation
  }

  return undefined
}
