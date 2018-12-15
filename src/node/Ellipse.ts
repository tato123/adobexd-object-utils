import { Ellipse } from '../@types/scenegraph'
import GraphicsNode from './GraphicsNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDEllipseWrapper implements JsonSerializer {
  private xdNode: Ellipse
  private parentNodeWrapper: GraphicsNode

  constructor(xdNode: Ellipse) {
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

      radiusX: node.radiusX,
      radiusY: node.radiusY,
      isCircle: node.isCircle,
      ...result
    }
  }
}
