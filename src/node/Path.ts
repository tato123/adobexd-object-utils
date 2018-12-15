import { Path } from '../@types/scenegraph'
import { SerializedNode, JsonSerializer } from './SerializedNode'
import GraphicsNode from './GraphicsNode'

export default class XDPathWrapper implements JsonSerializer {
  private xdNode: Path
  private parentNodeWrapper: GraphicsNode

  constructor(xdNode: Path) {
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

      pathData: node.pathData,
      ...result
    }
  }
}
