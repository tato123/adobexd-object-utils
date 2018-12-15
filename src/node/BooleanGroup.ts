import { BooleanGroup } from '../@types/scenegraph'
import GraphicsNodeWrapper from './GraphicsNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDBooleanGroupWrapper implements JsonSerializer {
  private xdNode: BooleanGroup
  private parentNodeWrapper: GraphicsNodeWrapper

  constructor(xdNode: BooleanGroup) {
    this.xdNode = xdNode
    this.parentNodeWrapper = new GraphicsNodeWrapper(this.xdNode)
  }

  toJSON(): SerializedNode {
    let result = {}

    if (this.parentNodeWrapper) {
      result = this.parentNodeWrapper.toJSON()
    }

    const node = this.xdNode
    return {
      type: node.constructor.name,

      pathOp: node.pathOp,
      ...result
    }
  }
}
