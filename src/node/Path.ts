import { Path } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import GraphicsNode from './GraphicsNode'

export default class PathWrapper extends GraphicsNode implements JsonSerializer {
  private pathWrapper: Path

  constructor(xdNode: Path) {
    super(xdNode)
    this.pathWrapper = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.pathWrapper
    return Object.assign(
      {},
      {
        type: node.constructor.name,
        pathData: node.pathData
      },
      super.toJSON()
    )
  }
}
