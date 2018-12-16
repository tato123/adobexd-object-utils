import { Line } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import GraphicsNode from './GraphicsNode'

export default class LineWrapper extends GraphicsNode implements JsonSerializer {
  private lineWrapper: Line

  constructor(xdNode: Line) {
    super(xdNode)
    this.lineWrapper = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.lineWrapper
    return Object.assign(
      {},
      {
        type: node.constructor.name,

        start: node.start,
        end: node.end
      },
      super.toJSON()
    )
  }
}
