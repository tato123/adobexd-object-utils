import { Group } from '../@types/scenegraph'
import SceneNode from './SceneNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDGroupWrapper implements JsonSerializer {
  private xdNode: Group
  private parentNodeWrapper: SceneNode

  constructor(xdNode: Group) {
    this.xdNode = xdNode
    this.parentNodeWrapper = new SceneNode(this.xdNode)
  }

  toJSON(): SerializedNode {
    let result = {}

    if (this.parentNodeWrapper) {
      result = this.parentNodeWrapper.toJSON()
    }

    const node = this.xdNode
    return {
      type: node.constructor.name,

      mask: node.mask,
      ...result
    }
  }
}
