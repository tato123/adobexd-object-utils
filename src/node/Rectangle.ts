import { Rectangle } from '../@types/scenegraph'
import GraphicsNode from './GraphicsNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class RectangleWrapper extends GraphicsNode implements JsonSerializer {
  private rectangeWrapper: Rectangle

  constructor(xdNode: Rectangle) {
    super(xdNode)
    this.rectangeWrapper = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.rectangeWrapper
    return Object.assign(
      {},
      {
        type: node.constructor.name,
        width: node.width,
        height: node.height,
        cornerRadii: node.cornerRadii,
        hasRoundedCorners: node.hasRoundedCorners,
        effectiveCornerRadii: node.effectiveCornerRadii
      },
      super.toJSON()
    )
  }
}
