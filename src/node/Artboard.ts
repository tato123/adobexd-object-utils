import GraphicsNode from './GraphicsNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import { Artboard } from '../@types/scenegraph'

export default class ArtboardWrapper implements JsonSerializer {
  private xdNode: Artboard
  private parentNodeWrapper: GraphicsNode

  constructor(xdNode: Artboard) {
    this.xdNode = xdNode
    this.parentNodeWrapper = new GraphicsNode(this.xdNode)
  }

  toJSON(): SerializedNode {
    let result = {}

    if (this.parentNodeWrapper) {
      result = this.parentNodeWrapper.toJSON()
    }

    const node = this.xdNode
    return {
      type: node.constructor.name,
      width: node.width,
      height: node.height,
      viewportHeight: node.viewportHeight,
      ...result
    }
  }
}
