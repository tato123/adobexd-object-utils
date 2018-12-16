import { Ellipse } from '../@types/scenegraph'
import GraphicsNode from './GraphicsNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDEllipseWrapper extends GraphicsNode implements JsonSerializer {
  private ellipseNode: Ellipse

  constructor(xdNode: Ellipse) {
    super(xdNode)
    this.ellipseNode = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.ellipseNode
    return Object.assign(
      {},
      {
        type: node.constructor.name,

        radiusX: node.radiusX,
        radiusY: node.radiusY,
        isCircle: node.isCircle
      },
      super.toJSON()
    )
  }
}
