import { Line } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import GraphicsNode from './GraphicsNode'

export default class XDLineWrapper implements JsonSerializer {
  private xdNode: Line
  private parentNodeWrapper: GraphicsNode

  constructor(xdNode: Line) {
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

      start: node.start,
      end: node.end,
      ...result
    }
  }
}
