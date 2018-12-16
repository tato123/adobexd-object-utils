import { BooleanGroup } from '../@types/scenegraph'
import GraphicsNodeWrapper from './GraphicsNode'
import { SerializedNode, JsonSerializer } from './SerializedNode'

export default class XDBooleanGroupWrapper extends GraphicsNodeWrapper implements JsonSerializer {
  private booleanGroup: BooleanGroup

  constructor(xdNode: BooleanGroup) {
    super(xdNode)
    this.booleanGroup = xdNode
  }

  toJSON(): SerializedNode {
    const node = this.booleanGroup
    return Object.assign(
      {},
      {
        type: node.constructor.name,

        pathOp: node.pathOp
      },
      super.toJSON()
    )
  }
}
