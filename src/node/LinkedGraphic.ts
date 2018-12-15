import { LinkedGraphic } from '../@types/scenegraph'
import SceneNode from './SceneNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDLinkedGraphicWrapper implements JsonSerializer {
  private xdNode: LinkedGraphic
  private parentNodeWrapper: SceneNode

  constructor(xdNode: LinkedGraphic) {
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

      ...result
    }
  }
}
