import { LinearGradientFill } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDLinearGradientFillWrapper implements JsonSerializer {
  private xdNode: LinearGradientFill

  constructor(xdNode: LinearGradientFill) {
    this.xdNode = xdNode
  }

  toJSON(): SerializedNode {
    let result = {}

    const node = this.xdNode
    return {
      type: node.constructor.name,

      colorStops: node.colorStops,
      startX: node.startX,
      startY: node.startY,
      endX: node.endX,
      endY: node.endY,
      ...result
    }
  }
}
