import { RootNode } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import SceneNode from './SceneNode'

export default class XDRootNodeWrapper implements JsonSerializer {
  private xdNode: RootNode
  private parentNodeWrapper: SceneNode

  constructor(xdNode: RootNode) {
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
