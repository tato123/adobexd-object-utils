import { Rectangle } from '../@types/scenegraph'
import GraphicsNode from './GraphicsNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDRectangleWrapper implements JsonSerializer {
  private xdNode: Rectangle
  private parentNodeWrapper: GraphicsNode

  constructor(xdNode: Rectangle) {
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
      cornerRadii: node.cornerRadii,
      hasRoundedCorners: node.hasRoundedCorners,
      effectiveCornerRadii: node.effectiveCornerRadii,
      ...result
    }
  }
}
